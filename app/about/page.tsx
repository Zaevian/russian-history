export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-medium mb-8">About This Project</h1>
      
      <div className="prose text-lg">
        <p>RussiaHistory.org is an attempt to create a world-class digital scholarly reference for the entire history of Russia, built to the standards of the best university textbooks.</p>

        <p>The project follows a detailed implementation plan that prioritizes:</p>
        
        <ul>
          <li>Strict scholarly rigor — every interpretive claim supported by multiple prominent historians with explicit debate presentation.</li>
          <li>Complementary visuals only — images and videos enhance the reading experience but never substitute for text and citations.</li>
          <li>Thoughtful use of technology — Framer Motion for comprehension, not decoration; excellent performance and accessibility.</li>
        </ul>

        <p>This is an early but ambitious build. The full vision is described in the design document linked from the homepage.</p>
      </div>

      <div className="mt-12">
        <a href="/" className="text-sm underline">← Back to homepage</a>
      </div>
    </div>
  );
}
