using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test_react_redux.Data;

namespace test_react_redux.Models.Repositories
{
    //interface de acesso externa
    public interface iClassifiedRepository
    {
        public Task<List<Classified>> getClassified();

        public Task isertClassified(Classified classified);
    }
    public class classifiedRepository : baseRepository<Classified>, iClassifiedRepository
    {
        // implementação obrigatório de função depois de herdar o base respository
        // passado contexto para classe pai
        public classifiedRepository(ClassifiedContext context):base(context)
        {
        }

        public async Task<List<Classified>> getClassified()
        {
            //pegando todos classificados registrados, selecionando campos especificos para devolver viewModel ao invés de entidade
            return await dbSet.Where(t => t.Id != null).OrderByDescending(y => y.Date).ToListAsync();
        }

        public async Task isertClassified(Classified classified)
        {
            dbSet.Add(classified);
            await context.SaveChangesAsync();
        }
    }
}
