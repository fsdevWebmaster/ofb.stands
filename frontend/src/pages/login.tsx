import { useAuth } from "../hooks/useAuth"
import './../styles/login.sass'

export const Login = () => {
  const { login, error } = useAuth();

  return (
    <div className="container">
      <div className="logo-container container py-5 my-5">
        <img src="/src/assets/logo-ofb.png" alt="main logo" className="img-fluid" />
      </div>
      <h1 className="text-center">
        Ubicación de atriles
      </h1>
      { error &&  
        <p className="alert alert-danger">
          { error }
        </p>
      }
      <form onSubmit={ login }>
        <label htmlFor="email" className="mt-2 py-2">
          <span>Email</span>
          <input 
            name="email"
            type="email" 
            className="form-control"
          />
        </label>
        <label htmlFor="password" className="mt-2 py-2">
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
