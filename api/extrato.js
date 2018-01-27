module.exports = function(Logs, request, response, JWT, CHAVESECRETA, apiKey){  
  let account = request.body.account
  let requestApiKey = request.body.apiKey

  if(requestApiKey === apiKey){
		Logs.find({"account":account}, function(err,docs){
			if (docs !== null){
			response.send({status: true, msg:"Sucesso!!!", logs: docs})
			} else {
			response.send ({status: false, msg: "Usuário não encontrado"})
			}
		})
  } else{
		  response.send({status: false, msg: "ApiKey inválida"})
  }


}
