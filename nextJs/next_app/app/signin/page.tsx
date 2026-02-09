"use client"

const SignIn = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-black border border-white rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-light text-white mb-2 text-center">
          Sign In
        </h1>
        <p className="text-white/60 mb-8 text-sm text-center">
          Welcome back to your todo workspace
        </p>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Username"
            className="w-full bg-transparent border border-white/30 text-white placeholder-white/50 py-3 px-4 rounded focus:border-white focus:outline-none transition duration-200"
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full bg-transparent border border-white/30 text-white placeholder-white/50 py-3 px-4 rounded focus:border-white focus:outline-none transition duration-200"
          />
          
          <button 
            onClick={()=>{
               
            }}
            className="w-full bg-white hover:bg-white/90 text-black font-medium py-3 px-6 rounded transition duration-200 mt-6"
          >
            Sign In
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-xs text-white/40">
            Don't have an account? Sign up instead
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
