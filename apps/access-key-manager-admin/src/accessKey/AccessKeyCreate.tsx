import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AccessLogTitle } from "../accessLog/AccessLogTitle";
import { SchoolTitle } from "../school/SchoolTitle";

export const AccessKeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accessLogs"
          reference="AccessLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessLogTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <DateTimeInput label="procurementDate" source="procurementDate" />
        <ReferenceInput source="school.id" reference="School" label="School">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};