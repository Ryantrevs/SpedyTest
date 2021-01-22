using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using test_react_redux.Models;
using test_react_redux.Models.Repositories;

namespace test_react_redux.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ClassifiedController : ControllerBase
    {
        //propriedade para acesso de interface
        private readonly iClassifiedRepository classifiedRepository;
        public ClassifiedController(iClassifiedRepository classifiedRepository)
        {
            //atribuição de interface
            this.classifiedRepository = classifiedRepository;
        }

        //Método para requisição http que devolve lista de classificados
        [HttpGet]
        [ActionName("getClassified")]
        public async Task<List<Classified>> getClassified()
        {
            //resposta de requisição é a lista de classificados
            return await classifiedRepository.getClassified();
        }

        [HttpPost]
        [ActionName("insertClassified")]
        public async Task<Classified> getClassified([FromForm]Classified classified)
        {
            classified.Id = Guid.NewGuid().ToString();
            classified.Date = DateTime.Now;
            //inserção de classificado
            await classifiedRepository.isertClassified(classified);
            return classified;
        }
    }
}
