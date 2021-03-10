const validator = ( varName:string ):boolean => {
  
  const rule = /^[a, e, i, o, u][a, e, i, o , u, v, d, r]{0,2}[a, e, i, o, u, v, d, r, 0-9]{0,1}$/;

  console.log(varName, "=", rule.test(varName) ? "Permitido" : "Não permitido");

  return true;
}

export default validator;