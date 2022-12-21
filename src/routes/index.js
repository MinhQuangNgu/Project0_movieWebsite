import Login from '~/auth/login';
import Register from '~/auth/register';
import TypeMovie from '~/movieType';
import MovieKind from '~/movieKind';
import Detail from '~/detail';
import MovieMoreDetail from '~/movieDetail';
import AdminLogin from '~/admin/auth/login';
import CreatProduct from '~/admin/product/Create';
import EditProduct from '~/admin/product/Edit';
export const publicRoutes = [
    {path:"/login",component:Login},
    {path:"/register",component:Register},
    {path:"/admin/login",component:AdminLogin},
    {path:"/admin/create",component:CreatProduct,admin:true},
    {path:"/admin/edit/:slug",component:EditProduct,admin:true},
    {path:"/watch/:slug",component:MovieMoreDetail},
    {path:"/xem-phim/:slug",component:Detail},
    {path:"/:kind/:slug",component:MovieKind},
    {path:"/:slug",component:TypeMovie}
]

export const privateRoutes = [

]