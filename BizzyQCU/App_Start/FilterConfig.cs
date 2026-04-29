using System.Web;
using System.Web.Mvc;

namespace User_Profile_Seller_Juvi
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
