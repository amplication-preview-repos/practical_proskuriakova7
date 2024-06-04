import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCESSKEY_TITLE_FIELD } from "./AccessKeyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";

export const AccessKeyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <TextField label="procurementDate" source="procurementDate" />
        <ReferenceField label="School" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccessLog"
          target="accessKeyId"
          label="AccessLogs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AccessKey"
              source="accesskey.id"
              reference="AccessKey"
            >
              <TextField source={ACCESSKEY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="action" source="action" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
