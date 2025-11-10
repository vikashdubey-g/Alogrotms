import * as yup from "yup";
export const textRegex = /^\S[a-z_]+$/;
export const textNRegex = /^\S[a-z-]+$/;
export const textNumberRegex = /^\S[a-z0-9_]+$/;
export const textNumberNRegex = /^\S[a-z-]+$/;

export const textNumberRegexMsg =
  "should be only lowercase alphabets and numbers with no white spaces and special characters other than _ and should not be duplicate";
export const textRegexMsg =
  "should be only lowercase alphabets with no white spaces and special characters other than _";
export const textNRegexMsg =
  "should be only lowercase alphabets with no white spaces and special characters other than -";

export const policydetailsValidation = yup.object({
  service_provider: yup
    .string("Enter Service Name")
    .required("This field is required"),
  programing_language_version: yup
    .string("Enter Service Name")
    .required("This field is required"),
  programing_framework: yup
    .string("Enter Service Name")
    .required("This field is required"),
  programing_language: yup
    .string("Enter Service Name")
    .required("This field is required"),

  // parameters: yup.array().of(
  //   yup.object().shape({
  //     key: yup.string().matches(textNumberRegex, textNumberRegexMsg).required("This field is required"),
  //     value: yup.string().matches(textNumberRegex, textNumberRegexMsg).required("This field is required"),
  //   })
  // ),
});

export const securitydetailsValidation = yup.object().shape({
  identity_provider: yup
    .string("Enter Service Name")
    .required("This field is required"),
  existing_db: yup
    .boolean()
    .required("Select if you are having existing idp or not"),
  cognito_new: yup.object().when("existing_db", {
    is: false,
    then: yup.object().shape({
      cognito_configuration: yup.object({
        user_pool: yup.object({
          custom_attributes: yup.array().of(
            yup.object().shape({
              name: yup
                .string()
                .matches(textNumberRegex, textNumberRegexMsg)
                .required("This field is required"),
              type: yup
                .string("should be string")
                .required("This field is required"),
              min: yup.number().when("type", {
                is: (type) => type === "string" || type === "number",
                then: yup
                  .number()
                  .min(1, "should be greater than 1")
                  .required("This field is required"),
              }),
              max: yup.number().when("type", {
                is: (type) => type === "string" || type === "number",
                then: yup
                  .number()
                  .max(30, "should be less than 30")
                  .required("This field is required"),
              }),
              mutable: yup.string().required("This field is required"),
            })
          ),
        }),
      }),
    }),
  }),
  cognito_existing: yup.object().when("existing_db", {
    is: true,
    then: yup.object().shape({
      pool_id: yup.string().required("This field is required"),
      client_id: yup.string().required("This field is required"),
    }),
  }),
  userGroups: yup.array().of(
    yup.object().shape({
      userGroup: yup.string().matches(textRegex, textRegexMsg),
      authorization: yup
        .array()
        .of(yup.string())
        .when("userGroup", {
          is: (userGroup) => userGroup,
          then: yup
            .array()
            .of(yup.string())
            .min(1, "select atleast one method"),
        }),
    })
  ),
});

export const infrastructuredetailsValidation = yup.object().shape({
  database: yup.object().shape({
    // db_type: yup.string().required("This field is required"),
    // database_service_name: yup.string().required("This field is required"),
    existing_db: yup
      .boolean()
      .required("Select if you are having existing db or not"),
    dynamodb_new: yup.object().when(["existing_db"], {
      is: (existing_db) => existing_db === false,
      then: yup.object().shape({
        dynamodb_configuration: yup.object().shape({
          read_capacity: yup.string().required("This field is required"),
          write_capacity: yup.string().required("This field is required"),
          replication_regions: yup.array().min(1, "This field is required"),
          stream: yup.string().required("This field is required"),
          auto_scale_read_capacity: yup.object({
            min_capacity: yup.string().required("This field is required"),
            max_capacity: yup.string().required("This field is required"),
            target_utilization_percent: yup
              .string()
              .required("This field is required"),
          }),
          auto_scale_write_capacity: yup.object({
            min_capacity: yup.string().required("This field is required"),
            max_capacity: yup.string().required("This field is required"),
            target_utilization_percent: yup
              .string()
              .required("This field is required"),
          }),
          auto_scale_global_secondary_index_read_capacity: yup.object({
            min_capacity: yup.string().required("This field is required"),
            max_capacity: yup.string().required("This field is required"),
            target_utilization_percent: yup
              .string()
              .required("This field is required"),
          }),
          auto_scale_global_secondary_index_write_capacity: yup.object({
            min_capacity: yup.string().required("This field is required"),
            max_capacity: yup.string().required("This field is required"),
            target_utilization_percent: yup
              .string()
              .required("This field is required"),
          }),
        }),
      }),
    }),
    dynamodb_existing: yup.object().when("existing_db", {
      is: true,
      then: yup.object().shape({
        arn: yup.string().required("ARN is required"),
      }),
    }),
  }),
  // api_type: yup.string().required("select the required api type"),
});

export const policyPageValidation = yup.object({
  name: yup.string("Enter Security name").required("This field is required"),
  cloud_service_provider: yup
    .string("Enter Service Provider Name")
    .required("This field is required"),
  serverless_framework: yup
    .string("Enter Framework Details")
    .required("This field is required"),
  run_time: yup.string("Enter Run Name").required("This field is required"),
  primary_region: yup
    .string("Enter Primary Region")
    .required("This field is required"),
  secondary_region: yup.array().min(1, "This field is required"),
  environments_map: yup.array().of(
    yup.object().shape({
      environment_name: yup.string().required("This field is required"),
      cloud_account_number: yup.number().required("This field is required"),
      environment_prefix_value: yup.object({
        URL: yup.string().required("This field is required"),
        Aws_resources: yup.string().required("This field is required"),
        External_resources: yup.string().required("This field is required"),
      }),
      environment_suffix_value: yup.object({
        URL: yup.string().required("This field is required"),
        Aws_resources: yup.string().required("This field is required"),
        External_resources: yup.string().required("This field is required"),
      }),
    })
  ),
  parameters_list: yup.array().of(
    yup.object().shape({
      parameter_key: yup
        .string()
        .matches(textNumberRegex, textNumberRegexMsg)
        .required("This field is required"),
      parameter_value: yup
        .string()
        .matches(textNumberRegex, textNumberRegexMsg)
        .required("This field is required"),
    })
  ),
  iam_roles: yup
    .string("Enter IAM Roles Naming Convention")
    .required("This field is required"),
  ssm_parameters: yup
    .string("Enter SSM Parameters Naming Conventions")
    .required("This field is required"),
  Lambda: yup
    .string("Enter Lambda Name Naming Conventions")
    .required("This field is required"),
  cognito_userpool: yup
    .string("Enter Cognito Userpool Naming Conventions")
    .required("This field is required"),
  Cloudwatch_log_grp: yup
    .string("Enter Cloud Watch Naming Conventions")
    .required("This field is required"),
  Event_bridge: yup
    .string("Enter Event Bridge Naming Conventions")
    .required("This field is required"),
  version_control_type: yup
    .string("Select Version Control Policy")
    .required("This field is required"),
  branching_strategy: yup
    .string("Select Branching Strategy")
    .required("This field is required"),
  feature_branch_name: yup.string().when(["branching_strategy"], {
    is: (branching_strategy) => branching_strategy === "git-branching",
    then: yup
      .string("Enter Feature Branch Name")
      .required("This field is required"),
  }),
  major_version: yup
    .string("Select Major Version Options")
    .required("This field is required"),
  major_version_val: yup
    .string("Select Major version")
    .required("This field is required"),
  minor_version: yup
    .string("Select Minor Version Options")
    .required("This field is required"),
  minor_version_val: yup
    .string("Select Minor version")
    .required("This field is required"),
  patch_version: yup
    .string("Select Patch Version Options")
    .required("This field is required"),
  patch_version_val: yup
    .string("Select Patch version")
    .required("This field is required"),
});

export const securityPolicyValidations = yup.object().shape({
  name: yup.string("Enter Security name").required("This field is required"),
  service_provider: yup
    .string("Select a Security Provider")
    .required("This field is required"),
  existing_idp: yup
    .boolean("Choose User Pool")
    .required("This field is required"),
  user_pool_name: yup.string().when(["existing_idp"], {
    is: (existing_idp) => existing_idp === false,
    then: yup.string("Enter Pool Name").required("This field is required"),
  }),
  existing_userpool: yup.string().when(["existing_idp"], {
    is: (existing_idp) => existing_idp === true,
    then: yup
      .string("Select Existing Userpool")
      .required("This field is required"),
  }),
  idp_new: yup.object().when(["existing_idp"], {
    is: (existing_idp) => existing_idp === false,
    then: yup.object().shape({
      custom_attributes: yup.array().of(
        yup.object().shape({
          attrtibute_type: yup.string().required("This field is required"),
          attrtibute_name: yup.string().required("This field is required"),
          attrtibute_min: yup.string().required("This field is required"),
          attrtibute_max: yup.string().required("This field is required"),
        })
      ),
    }),
  }),

  user_groups: yup.array().of(
    yup.object().shape({
      roles: yup.string().required("This field is required"),
      permissions: yup.array().min(1, "This field is required"),
    })
  ),
});

export const databaseValidations = yup.object({
  existing_db: yup
    .boolean()
    .required("Select if you are having existing db or not"),
  table: yup.string().when(["existing_db"], {
    is: (existing_db) => existing_db === true,
    then: yup.string("Enter New Table Name").required("This field is required"),
  }),
  database_tablename: yup.string().when(["existing_db"], {
    is: (existing_db) => existing_db === false,
    then: yup.string("Enter Table Name").required("This field is required"),
  }),
  database_new_details: yup.object().when(["existing_db"], {
    is: (existing_db) => existing_db === false,
    then: yup.object().shape({
      dynamodb_rcu: yup
        .number("Enter Read Capacity")
        .required("This field is required"),
      dynamodb_wcu: yup.number().required("This field is required"),
      dynamodb_autoscale_rcu_min: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_rcu_max: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_rcu_target: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_wcu_min: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_wcu_max: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_wcu_target: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_gsi_rcu_min: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_gsi_rcu_max: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_gsi_rcu_target: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_gsi_wcu_min: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_gsi_wcu_max: yup
        .number()
        .required("This field is required"),
      dynamodb_autoscale_gsi_wcu_target: yup
        .number()
        .required("This field is required"),
    }),
  }),
});

export const partitionKeyOrSortKeyValidation = yup.object().shape({
  column_name: yup
    .string("Enter Column Name")
    .required("This field is required"),
  data_type: yup.string("Enter Data Type").required("This field is required"),
});

export const indicesValidation = yup.object().shape({
  index_name: yup.string("Enter Index Name").required("This field is required"),
  data_model: yup
    .string("Select Data Model")
    .required("This field is required"),
  read_capacity_units: yup.string().when(["index_type"], {
    is: (index_type) => index_type === "gsi",
    then: yup.string("Enter Read Capacity").required("This field is required"),
  }),
  write_capacity_units: yup.string().when(["index_type"], {
    is: (index_type) => index_type === "gsi",
    then: yup.string("Enter Write Capacity").required("This field is required"),
  }),
  partition_key: yup.string().when(["index_type"], {
    is: (index_type) => index_type === "gsi",
    then: yup.string("Select Data Model").required("This field is required"),
  }),
  sort_key: yup.string().when(["index_type"], {
    is: (index_type) => index_type === "gsi",
    then: yup.string("Select Data Model").required("This field is required"),
  }),
  hash_key: yup.string().when(["index_type"], {
    is: (index_type) => index_type === "lsi",
    then: yup.string("Select Data Model").required("This field is required"),
  }),
});

export const customApiValidation = yup.object().shape({
  name: yup
    .string("Enter API Name")
    .matches(textRegex, textRegexMsg)
    .required("This field is required"),
  api_type: yup.string("Enter API Type").required("This field is required"),
  is_dummy: yup.boolean().required(),
  data_model_name: yup.string().when(["is_dummy"], {
    is: (is_dummy) => is_dummy === false,
    then: yup.string("Select Data Model").required("This field is required"),
  }),
  index_name: yup.string().when(["is_dummy"], {
    is: (is_dummy) => is_dummy === false,
    then: yup.string("Select Index").required("This field is required"),
  }),
  columns: yup.array().when(["is_dummy"], {
    is: (is_dummy) => is_dummy === false,
    then: yup.array().min(1, "This field is required"),
  }),
});
