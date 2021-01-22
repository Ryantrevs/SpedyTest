using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test_react_redux.Data;

namespace test_react_redux.Models.Repositories
{
    public class baseRepository<T> where T : class
    {
        // propriedade para ler banco de dados
        protected readonly ClassifiedContext context;
        //propriedade de acesso de banco de dados
        protected readonly DbSet<T> dbSet;

        //função base para implementar em outros repositórios
        public baseRepository(ClassifiedContext context)
            {
                this.context = context;
                dbSet = context.Set<T>();
            }
     
    }
}
