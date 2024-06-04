import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AccessKeyList } from "./accessKey/AccessKeyList";
import { AccessKeyCreate } from "./accessKey/AccessKeyCreate";
import { AccessKeyEdit } from "./accessKey/AccessKeyEdit";
import { AccessKeyShow } from "./accessKey/AccessKeyShow";
import { SchoolList } from "./school/SchoolList";
import { SchoolCreate } from "./school/SchoolCreate";
import { SchoolEdit } from "./school/SchoolEdit";
import { SchoolShow } from "./school/SchoolShow";
import { AccessLogList } from "./accessLog/AccessLogList";
import { AccessLogCreate } from "./accessLog/AccessLogCreate";
import { AccessLogEdit } from "./accessLog/AccessLogEdit";
import { AccessLogShow } from "./accessLog/AccessLogShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Access Key Manager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AccessKey"
          list={AccessKeyList}
          edit={AccessKeyEdit}
          create={AccessKeyCreate}
          show={AccessKeyShow}
        />
        <Resource
          name="School"
          list={SchoolList}
          edit={SchoolEdit}
          create={SchoolCreate}
          show={SchoolShow}
        />
        <Resource
          name="AccessLog"
          list={AccessLogList}
          edit={AccessLogEdit}
          create={AccessLogCreate}
          show={AccessLogShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
