export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-light/20 dark:bg-primary-dark/20 mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob"
      ></div>
      <div 
        className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pastel-blue/30 dark:bg-pastel-blue/10 mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob"
        style={{ animationDelay: '2s' }}
      ></div>
      <div 
        className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] rounded-full bg-pastel-lavender/40 dark:bg-dark-accent/20 mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob"
        style={{ animationDelay: '4s' }}
      ></div>
    </div>
  );
}
