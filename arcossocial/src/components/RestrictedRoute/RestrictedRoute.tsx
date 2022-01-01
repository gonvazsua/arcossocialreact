import {Route, RouteProps} from "react-router";
import LoginPage from "../../pages/LoginPage/LoginPage";

interface Props extends RouteProps {
    component: React.ComponentType;
    redirectTo?: string;
}

const RestrictedRoute: React.FC<Props> = ({ component: Component, ...rest }: Props) => {
    const userToken = localStorage.getItem('arcossocial-token');
    const isAuthorized = userToken || false;

    return <Route {...rest} render={() => (isAuthorized ? <Component /> : <LoginPage />)} />;
};

export default RestrictedRoute;