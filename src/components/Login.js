import React from 'react';
function Login(){
    return (
        <form style={{width:"500px"}}>
        <div className="form-group">
            <label for="exampleInputEmail1">Adresse E-mail</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">Nous ne partagerons jamais votre e-mail.</small>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Mots de passe</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mots de pass"/>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Vérifier moi</label>
        </div>
        <button type="submit" className="btn btn-primary">Soumettre</button>
        </form>
    );
}   
export default Login;