using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace test_react_redux.Models
{
    //Entidade do classificado
    public class Classified
    {
        //primary key
        public String Id { get; set; }

        //titulo
        public String Title { get; set; }

        //Descricao
        public String Describe { get; set; }

        //Data
        public DateTime Date { get; set; }
    }
}
