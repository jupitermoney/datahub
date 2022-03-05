"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7542],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8632:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=t(7462),o=t(3366),i=(t(7294),t(4137)),r=["components"],s={sidebar_position:5,title:"Dashboard",sidebar_label:"Dashboard",slug:"/generated/metamodel/entities/dashboard",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/generated/metamodel/entities/dashboard.md"},l="Dashboard",c={unversionedId:"docs/generated/metamodel/entities/dashboard",id:"docs/generated/metamodel/entities/dashboard",isDocsHomePage:!1,title:"Dashboard",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/dashboard.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/dashboard",permalink:"/docs/generated/metamodel/entities/dashboard",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/generated/metamodel/entities/dashboard.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Dashboard",sidebar_label:"Dashboard",slug:"/generated/metamodel/entities/dashboard",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/generated/metamodel/entities/dashboard.md"},sidebar:"overviewSidebar",previous:{title:"Chart",permalink:"/docs/generated/metamodel/entities/chart"},next:{title:"Corpuser",permalink:"/docs/generated/metamodel/entities/corpuser"}},d=[{value:"Aspects",id:"aspects",children:[{value:"dashboardKey",id:"dashboardkey",children:[],level:3},{value:"dashboardInfo",id:"dashboardinfo",children:[],level:3},{value:"editableDashboardProperties",id:"editabledashboardproperties",children:[],level:3},{value:"ownership",id:"ownership",children:[],level:3},{value:"status",id:"status",children:[],level:3},{value:"globalTags",id:"globaltags",children:[],level:3},{value:"browsePaths",id:"browsepaths",children:[],level:3},{value:"glossaryTerms",id:"glossaryterms",children:[],level:3},{value:"institutionalMemory",id:"institutionalmemory",children:[],level:3},{value:"dataPlatformInstance",id:"dataplatforminstance",children:[],level:3},{value:"domains",id:"domains",children:[],level:3},{value:"container",id:"container",children:[],level:3},{value:"deprecation",id:"deprecation",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[{value:"Outgoing",id:"outgoing",children:[],level:3}],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],m={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dashboard"},"Dashboard"),(0,i.kt)("h2",{id:"aspects"},"Aspects"),(0,i.kt)("h3",{id:"dashboardkey"},"dashboardKey"),(0,i.kt)("p",null,"Key for a Dashboard"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dashboardKey"\n  },\n  "name": "DashboardKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 4.0,\n        "fieldName": "tool",\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "dashboardTool",\n      "doc": "The name of the dashboard tool such as looker, redash etc."\n    },\n    {\n      "type": "string",\n      "name": "dashboardId",\n      "doc": "Unique id for the dashboard. This id should be globally unique for a dashboarding tool even when there are multiple deployments of it. As an example, dashboard URL could be used here for Looker such as \'looker.linkedin.com/dashboards/1234\'"\n    }\n  ],\n  "doc": "Key for a Dashboard"\n}\n'))),(0,i.kt)("h3",{id:"dashboardinfo"},"dashboardInfo"),(0,i.kt)("p",null,"Information about a dashboard"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dashboardInfo"\n  },\n  "name": "DashboardInfo",\n  "namespace": "com.linkedin.dashboard",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "map",\n        "values": "string"\n      },\n      "name": "customProperties",\n      "default": {},\n      "doc": "Custom property bag."\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "externalUrl",\n      "default": null,\n      "doc": "URL where the reference exist"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "title",\n      "doc": "Title of the dashboard"\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT",\n        "hasValuesFieldName": "hasDescription"\n      },\n      "type": "string",\n      "name": "description",\n      "doc": "Detailed description about the dashboard"\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "chart"\n          ],\n          "isLineage": true,\n          "name": "Contains"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "charts",\n      "default": [],\n      "doc": "Charts in a dashboard"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "ChangeAuditStamps",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": {\n              "type": "record",\n              "name": "AuditStamp",\n              "namespace": "com.linkedin.common",\n              "fields": [\n                {\n                  "type": "long",\n                  "name": "time",\n                  "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                },\n                {\n                  "java": {\n                    "class": "com.linkedin.common.urn.Urn"\n                  },\n                  "type": "string",\n                  "name": "actor",\n                  "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                },\n                {\n                  "java": {\n                    "class": "com.linkedin.common.urn.Urn"\n                  },\n                  "type": [\n                    "null",\n                    "string"\n                  ],\n                  "name": "impersonator",\n                  "default": null,\n                  "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                }\n              ],\n              "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n            },\n            "name": "created",\n            "default": {\n              "actor": "urn:li:corpuser:unknown",\n              "impersonator": null,\n              "time": 0\n            },\n            "doc": "An AuditStamp corresponding to the creation of this resource/association/sub-resource. A value of 0 for time indicates missing data."\n          },\n          {\n            "type": "com.linkedin.common.AuditStamp",\n            "name": "lastModified",\n            "default": {\n              "actor": "urn:li:corpuser:unknown",\n              "impersonator": null,\n              "time": 0\n            },\n            "doc": "An AuditStamp corresponding to the last modification of this resource/association/sub-resource. If no modification has happened since creation, lastModified should be the same as created. A value of 0 for time indicates missing data."\n          },\n          {\n            "type": [\n              "null",\n              "com.linkedin.common.AuditStamp"\n            ],\n            "name": "deleted",\n            "default": null,\n            "doc": "An AuditStamp corresponding to the deletion of this resource/association/sub-resource. Logically, deleted MUST have a later timestamp than creation. It may or may not have the same time as lastModified depending upon the resource/association/sub-resource semantics."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into various lifecycle stages, and who acted to move it into those lifecycle stages. The recommended best practice is to include this record in your record schema, and annotate its fields as @readOnly in your resource. See https://github.com/linkedin/rest.li/wiki/Validation-in-Rest.li#restli-validation-annotations"\n      },\n      "name": "lastModified",\n      "doc": "Captures information about who created/last modified/deleted this dashboard and when"\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "dashboardUrl",\n      "default": null,\n      "doc": "URL for the dashboard. This could be used as an external link on DataHub to allow users access/view the dashboard"\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldType": "KEYWORD",\n        "filterNameOverride": "Access Level"\n      },\n      "type": [\n        "null",\n        {\n          "type": "enum",\n          "symbolDocs": {\n            "PRIVATE": "Private availability to certain set of users",\n            "PUBLIC": "Publicly available access level"\n          },\n          "name": "AccessLevel",\n          "namespace": "com.linkedin.common",\n          "symbols": [\n            "PUBLIC",\n            "PRIVATE"\n          ],\n          "doc": "The various access levels"\n        }\n      ],\n      "name": "access",\n      "default": null,\n      "doc": "Access level for the dashboard"\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "lastRefreshed",\n      "default": null,\n      "doc": "The time when this dashboard last refreshed"\n    }\n  ],\n  "doc": "Information about a dashboard"\n}\n'))),(0,i.kt)("h3",{id:"editabledashboardproperties"},"editableDashboardProperties"),(0,i.kt)("p",null,"Stores editable changes made to properties. This separates changes made from\ningestion pipelines and edits in the UI to avoid accidental overwrites of user-provided data by ingestion pipelines"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "editableDashboardProperties"\n  },\n  "name": "EditableDashboardProperties",\n  "namespace": "com.linkedin.dashboard",\n  "fields": [\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "created",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0\n      },\n      "doc": "An AuditStamp corresponding to the creation of this resource/association/sub-resource. A value of 0 for time indicates missing data."\n    },\n    {\n      "type": "com.linkedin.common.AuditStamp",\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0\n      },\n      "doc": "An AuditStamp corresponding to the last modification of this resource/association/sub-resource. If no modification has happened since creation, lastModified should be the same as created. A value of 0 for time indicates missing data."\n    },\n    {\n      "type": [\n        "null",\n        "com.linkedin.common.AuditStamp"\n      ],\n      "name": "deleted",\n      "default": null,\n      "doc": "An AuditStamp corresponding to the deletion of this resource/association/sub-resource. Logically, deleted MUST have a later timestamp than creation. It may or may not have the same time as lastModified depending upon the resource/association/sub-resource semantics."\n    },\n    {\n      "Searchable": {\n        "fieldName": "editedDescription",\n        "fieldType": "TEXT"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Edited documentation of the dashboard"\n    }\n  ],\n  "doc": "Stores editable changes made to properties. This separates changes made from\\ningestion pipelines and edits in the UI to avoid accidental overwrites of user-provided data by ingestion pipelines"\n}\n'))),(0,i.kt)("h3",{id:"ownership"},"ownership"),(0,i.kt)("p",null,"Ownership information of an entity."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpUser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "CONSUMER": "A person, group, or service that consumes the data",\n                  "DATAOWNER": "A person or group that is owning the data",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code",\n                  "PRODUCER": "A person, group, or service that produces/generates the data",\n                  "STAKEHOLDER": "A person or a group that has direct business interest"\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Owner category or owner role"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,i.kt)("h3",{id:"status"},"status"),(0,i.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,i.kt)("h3",{id:"globaltags"},"globalTags"),(0,i.kt)("p",null,"Tag aspect used for applying tags to an entity"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalTags"\n  },\n  "name": "GlobalTags",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TagAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "tags",\n                "fieldType": "URN",\n                "filterNameOverride": "Tag",\n                "hasValuesFieldName": "hasTags"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.TagUrn"\n              },\n              "type": "string",\n              "name": "tag",\n              "doc": "Urn of the applied tag"\n            }\n          ],\n          "doc": "Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters."\n        }\n      },\n      "name": "tags",\n      "doc": "Tags associated with a given entity"\n    }\n  ],\n  "doc": "Tag aspect used for applying tags to an entity"\n}\n'))),(0,i.kt)("h3",{id:"browsepaths"},"browsePaths"),(0,i.kt)("p",null,"Shared aspect containing Browse Paths to be indexed for an entity."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "browsePaths"\n  },\n  "name": "BrowsePaths",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "fieldName": "browsePaths",\n          "fieldType": "BROWSE_PATH"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "paths",\n      "doc": "A list of valid browse paths for the entity.\\n\\nBrowse paths are expected to be backslash-separated strings. For example: \'prod/snowflake/datasetName\'"\n    }\n  ],\n  "doc": "Shared aspect containing Browse Paths to be indexed for an entity."\n}\n'))),(0,i.kt)("h3",{id:"glossaryterms"},"glossaryTerms"),(0,i.kt)("p",null,"Related business terms information"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "glossaryTerms"\n  },\n  "name": "GlossaryTerms",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "GlossaryTermAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "glossaryTerms",\n                "fieldType": "URN",\n                "filterNameOverride": "Glossary Term"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.GlossaryTermUrn"\n              },\n              "type": "string",\n              "name": "urn",\n              "doc": "Urn of the applied glossary term"\n            }\n          ],\n          "doc": "Properties of an applied glossary term."\n        }\n      },\n      "name": "terms",\n      "doc": "The related business terms"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "auditStamp",\n      "doc": "Audit stamp containing who reported the related business term"\n    }\n  ],\n  "doc": "Related business terms information"\n}\n'))),(0,i.kt)("h3",{id:"institutionalmemory"},"institutionalMemory"),(0,i.kt)("p",null,"Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "institutionalMemory"\n  },\n  "name": "InstitutionalMemory",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "InstitutionalMemoryMetadata",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.url.Url",\n                "coercerClass": "com.linkedin.common.url.UrlCoercer"\n              },\n              "type": "string",\n              "name": "url",\n              "doc": "Link to an engineering design document or a wiki page."\n            },\n            {\n              "type": "string",\n              "name": "description",\n              "doc": "Description of the link."\n            },\n            {\n              "type": {\n                "type": "record",\n                "name": "AuditStamp",\n                "namespace": "com.linkedin.common",\n                "fields": [\n                  {\n                    "type": "long",\n                    "name": "time",\n                    "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": "string",\n                    "name": "actor",\n                    "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": [\n                      "null",\n                      "string"\n                    ],\n                    "name": "impersonator",\n                    "default": null,\n                    "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                  }\n                ],\n                "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n              },\n              "name": "createStamp",\n              "doc": "Audit stamp associated with creation of this record"\n            }\n          ],\n          "doc": "Metadata corresponding to a record of institutional memory."\n        }\n      },\n      "name": "elements",\n      "doc": "List of records that represent institutional memory of an entity. Each record consists of a link, description, creator and timestamps associated with that record."\n    }\n  ],\n  "doc": "Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."\n}\n'))),(0,i.kt)("h3",{id:"dataplatforminstance"},"dataPlatformInstance"),(0,i.kt)("p",null,"The specific instance of the data platform that this entity belongs to"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataPlatformInstance"\n  },\n  "name": "DataPlatformInstance",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldType": "URN",\n        "filterNameOverride": "Platform"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Data Platform"\n    },\n    {\n      "Searchable": {\n        "fieldName": "platformInstance",\n        "fieldType": "URN"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "instance",\n      "default": null,\n      "doc": "Instance of the data platform (e.g. db instance)"\n    }\n  ],\n  "doc": "The specific instance of the data platform that this entity belongs to"\n}\n'))),(0,i.kt)("h3",{id:"domains"},"domains"),(0,i.kt)("p",null,"Links from an Asset to its Domains"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "domains"\n  },\n  "name": "Domains",\n  "namespace": "com.linkedin.domain",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "domain"\n          ],\n          "name": "AssociatedWith"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "addToFilters": true,\n          "fieldName": "domains",\n          "fieldType": "URN",\n          "filterNameOverride": "Domain",\n          "hasValuesFieldName": "hasDomain"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "domains",\n      "doc": "The Domains attached to an Asset"\n    }\n  ],\n  "doc": "Links from an Asset to its Domains"\n}\n'))),(0,i.kt)("h3",{id:"container"},"container"),(0,i.kt)("p",null,"Link from an asset to its parent container"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "container"\n  },\n  "name": "Container",\n  "namespace": "com.linkedin.container",\n  "fields": [\n    {\n      "Relationship": {\n        "entityTypes": [\n          "container"\n        ],\n        "name": "IsPartOf"\n      },\n      "Searchable": {\n        "addToFilters": true,\n        "fieldName": "container",\n        "fieldType": "URN",\n        "filterNameOverride": "Container"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "container",\n      "doc": "The parent container of an asset"\n    }\n  ],\n  "doc": "Link from an asset to its parent container"\n}\n'))),(0,i.kt)("h3",{id:"deprecation"},"deprecation"),(0,i.kt)("p",null,"Deprecation status of an entity"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "deprecation"\n  },\n  "name": "Deprecation",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN",\n        "weightsPerFieldValue": {\n          "true": 0.5\n        }\n      },\n      "type": "boolean",\n      "name": "deprecated",\n      "doc": "Whether the entity is deprecated."\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "decommissionTime",\n      "default": null,\n      "doc": "The time user plan to decommission this entity."\n    },\n    {\n      "type": "string",\n      "name": "note",\n      "doc": "Additional information about the entity deprecation plan, such as the wiki, doc, RB."\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "actor",\n      "doc": "The user URN which will be credited for modifying this deprecation content."\n    }\n  ],\n  "doc": "Deprecation status of an entity"\n}\n'))),(0,i.kt)("h2",{id:"relationships"},"Relationships"),(0,i.kt)("h3",{id:"outgoing"},"Outgoing"),(0,i.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Contains"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Chart via ",(0,i.kt)("inlineCode",{parentName:"li"},"dashboardInfo.charts")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"OwnedBy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CorpUser via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AssociatedWith"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Domain via ",(0,i.kt)("inlineCode",{parentName:"li"},"domains.domains")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IsPartOf"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Container via ",(0,i.kt)("inlineCode",{parentName:"li"},"container.container"))))),(0,i.kt)("h2",{id:"global-metadata-model"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/linkedin/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/linkedin/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);