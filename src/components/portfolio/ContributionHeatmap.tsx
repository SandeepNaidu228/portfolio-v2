import { useEffect, useRef, useState } from "react";

const GITHUB_USER = "SandeepNaidu228";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export function ContributionHeatmap() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [paddedCells, setPaddedCells] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [rangeStr, setRangeStr] = useState("");

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}`);
        const data = await res.json();
        
        if (data && Array.isArray(data.contributions)) {
          // Sort chronologically (oldest to newest)
          const chronological = [...data.contributions].sort((a, b) => a.date.localeCompare(b.date));
          
          // Filter out future placeholder dates
          const todayStr = new Date().toISOString().slice(0, 10);
          const active = chronological.filter(x => x.date <= todayStr);
          
          // Take the last 364 days (52 weeks)
          const recent = active.slice(-364);
          
          if (recent.length > 0) {
            // Align grid to start on Sunday
            const firstDate = new Date(recent[0].date);
            const firstDayOfWeek = firstDate.getDay(); // 0 = Sunday, 1 = Monday...
            
            const cellsList: ContributionDay[] = [];
            
            // Pad the start with empty cells
            for (let i = 0; i < firstDayOfWeek; i++) {
              cellsList.push({
                date: "",
                count: 0,
                level: 0,
              });
            }
            
            // Add actual contributions
            cellsList.push(...recent);
            
            // Pad the end to complete the 7-day week
            while (cellsList.length % 7 !== 0) {
              cellsList.push({
                date: "",
                count: 0,
                level: 0,
              });
            }
            
            setPaddedCells(cellsList);
            
            // Calculate total contributions
            const total = recent.reduce((sum, item) => sum + item.count, 0);
            setTotalContributions(total);
            
            // Calculate range string
            const startYear = new Date(recent[0].date).getFullYear();
            const endYear = new Date(recent[recent.length - 1].date).getFullYear();
            const yearStr = startYear === endYear ? `${startYear}` : `${startYear}-${endYear.toString().slice(-2)}`;
            setRangeStr(yearStr);
          }
        }
      } catch (err) {
        console.error("Contributions fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  useEffect(() => {
    if (!loading && scrollRef.current) {
      // Scroll to the right end on mount so most recent activity shows first on mobile
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [loading]);

  const shades = ["bg-contrib-0", "bg-contrib-1", "bg-contrib-2", "bg-contrib-3", "bg-contrib-4"];

  // Calculate dynamic columns
  const columnsCount = Math.ceil(paddedCells.length / 7);

  // Generate skeletons for loading state
  const skeletonCells = Array.from({ length: 52 * 7 }, () => ({
    date: "",
    count: 0,
    level: 0,
  }));

  return (
    <section className="py-8">
      <style>{`
        .bg-contrib-0 { background-color: #f1f5f9; }
        .bg-contrib-1 { background-color: #d1fae5; }
        .bg-contrib-2 { background-color: #6ee7b7; }
        .bg-contrib-3 { background-color: #10b981; }
        .bg-contrib-4 { background-color: #047857; }

        .dark .bg-contrib-0 { background-color: #1e293b; }
        .dark .bg-contrib-1 { background-color: #064e3b; }
        .dark .bg-contrib-2 { background-color: #047857; }
        .dark .bg-contrib-3 { background-color: #10b981; }
        .dark .bg-contrib-4 { background-color: #34d399; }
      `}</style>

      <div ref={scrollRef} className="overflow-x-auto scrollbar-none">
        <div className="min-w-[720px] pr-2">

          {/* Heatmap Grid */}
          <div
            className="grid gap-[3px]"
            style={{
              gridTemplateColumns: `repeat(${loading ? 52 : columnsCount}, minmax(0, 1fr))`,
              gridTemplateRows: "repeat(7, 1fr)",
              gridAutoFlow: "column",
            }}
          >
            {(loading ? skeletonCells : paddedCells).map((cell, i) => {
              const isPadded = !cell.date;
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-[2px] relative group cursor-pointer ${
                    loading
                      ? "bg-contrib-0 dark:bg-zinc-800 animate-pulse"
                      : isPadded
                      ? "bg-transparent cursor-default pointer-events-none"
                      : shades[cell.level]
                  }`}
                >
                  {/* Tooltip */}
                  {!loading && cell.date && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover:block z-50 bg-zinc-900 dark:bg-zinc-800 text-zinc-100 text-[10px] font-mono py-1.5 px-3 rounded shadow-lg whitespace-nowrap pointer-events-none border border-zinc-700/50">
                      {cell.count} contribution{cell.count === 1 ? "" : "s"} on {
                        new Date(cell.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      }
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[4px] border-transparent border-t-zinc-900 dark:border-t-zinc-800" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between mt-3 text-[10px] tracking-[0.15em] text-muted-foreground select-none">
        {loading ? (
          <div className="h-3.5 w-48 bg-muted rounded animate-pulse" />
        ) : (
          <span>{totalContributions.toLocaleString()} CONTRIBUTIONS · {rangeStr}</span>
        )}
        <div className="flex items-center gap-1.5">
          <span>LESS</span>
          {shades.map((s, i) => (
            <span key={i} className={`h-2.5 w-2.5 rounded-[2px] ${s}`} />
          ))}
          <span>MORE</span>
        </div>
      </div>
    </section>
  );
}
