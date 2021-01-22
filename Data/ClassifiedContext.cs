using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test_react_redux.Models;

namespace test_react_redux.Data
{
    public class ClassifiedContext : DbContext
    {

        //implementação obrigatória por herdar dbcontext;
        public ClassifiedContext(DbContextOptions<ClassifiedContext> options):base(options)
        {    
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Mapeamento de entidade e sua chave primária
            builder.Entity<Classified>().HasKey(t => t.Id);
        }
    }
}
