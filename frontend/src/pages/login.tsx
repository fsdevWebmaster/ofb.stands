import { useAuth } from "../hooks/useAuth"

export const Login = () => {
  const { login, error } = useAuth();

  return (
    <div className="container px-5 mt-5">
      <h1>Login</h1>
      { error &&  
        <p className="alert alert-danger">
          { error }
        </p>
      }
      <form onSubmit={ login }>
        <label htmlFor="email" className="mt-2">
          <span>Email</span>
          <input 
            name="email"
            type="email" 
            className="form-control"
          />
        </label>
        <label htmlFor="password" className="mt-2">
          <span>Contraseña</span>
          <input 
            name="password"
            type="password" 
            className="form-control" 
          />
        </label>
        <div className="clear"></div>

        <button className="btn btn-sm btn-secondary mt-2">
          Enviar
        </button>
      </form>
    </div>
  )
}
