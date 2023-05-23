import { groups, roles } from '../config/app.config';
import { useAuth } from '../hooks/useAuth';


export const Register = () => {
  const { handleRegister, error } = useAuth();

  return (
    <div className='container'>
      <h1>Registro de usuarios</h1>
      { error &&  
        <p className="alert alert-danger">
          { error }
        </p>
      }
      <form onSubmit={ e => handleRegister(e) }>
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
        <label htmlFor="name" className="mt-2">
          <span>Nombre completo</span>
          <input 
            name="name"
            type="text" 
            className="form-control"
          />
        </label>
        <label htmlFor="idDoc" className="mt-2">
          <span>Documento de identidad</span>
          <input 
            name="idDoc"
            type="text" 
            className="form-control"
          />
        </label>
        <label htmlFor="group" className="mt-2">
          <span>Grupo</span>
          <select name="group" className='form-control'>
            <option value="">Seleccione grupo</option>
            { groups.map(group => (
              <option key={ group.id } value={ group.id }>
                { group.name }
              </option>
            ))}
            
          </select>
        </label>
        <label htmlFor="role" className="mt-2">
          <span>Función</span>
          <select name="role" className='form-control'>
            <option value="">Seleccione función</option>
            { roles.map(role => (
              <option key={ role.name } value={ role.name }>
                { role.title }
              </option>
            ))}
          </select>
        </label>
        <div className="clear"></div>
        <button type='submit' className='btn btn-sm btn-secondary mt-3'>
          Enviar
        </button>
      </form>
    </div>
  )
}
