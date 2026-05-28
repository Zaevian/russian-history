export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-medium mb-8">About This Project</h1>
      
      <div className="prose text-lg text-[#1a1816]">
        <p>RussiaHistory.org exists to tell the full story of Russia — from the earliest Slavic settlements on the great rivers of Eastern Europe to the present day — in a single, readable, serious narrative.</p>

        <p>The site is written for the general reader and the student who wants more than a textbook summary but does not need a specialized monograph. It aims for breadth without sacrificing depth, and for honesty about the difficult and often tragic parts of the story without descending into polemic.</p>

        <p>The visuals throughout are strictly atmospheric and complementary. They are meant to evoke place and mood, never to stand in for evidence or argument. The knowledge lives in the text.</p>

        <p>Navigation is organized around two simple axes: <a href="/eras" className="underline">Eras</a> (chronological) and <a href="/themes" className="underline">Themes</a> (cross-cutting questions). The interactive Genealogy and Maps sections offer different ways into the same material.</p>
      </div>

      <div className="mt-12">
        <a href="/" className="text-sm underline">← Back to homepage</a>
      </div>
    </div>
  );
}
