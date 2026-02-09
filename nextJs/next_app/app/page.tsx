import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-black border border-white rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-light text-white mb-2">
          Todo Application
        </h1>
        <p className="text-white/60 mb-8 text-sm">
          Stay organized and boost your productivity
        </p>
        
        <div className="space-y-3">
          <Link 
            href="/signin"
            className="block w-full bg-white hover:bg-white/90 text-black font-medium py-3 px-6 rounded transition duration-200"
          >
            Sign up to todo
          </Link>
          
          <Link 
            href="/signin"
            className="block w-full bg-transparent hover:bg-white/10 text-white font-medium py-3 px-6 rounded transition duration-200 border border-white hover:border-white"
          >
            Sign in to todo
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-xs text-white/40">
            Get things done, one task at a time
          </p>
        </div>
      </div>
    </div>
  )
}
