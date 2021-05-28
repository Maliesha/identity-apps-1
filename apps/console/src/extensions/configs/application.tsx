/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { ReactNode } from "react";
import { ApplicationConfig } from "./models";
import {
    ExtendedClaimInterface,
    ExtendedExternalClaimInterface,
    SelectedDialectInterface
} from "../../features/applications/components/settings";
import { Grid } from "semantic-ui-react";
import { Heading } from "@wso2is/react-components";
import {AddUserStepContent} from "../application-templates/shared/components";

export const applicationConfig: ApplicationConfig = {
    advancedConfigurations: {
        showEnableAuthorization: true,
        showSaaS: true,
        showReturnAuthenticatedIdPs: true
    },
    attributeSettings: {
        advancedAttributeSettings: {
            showIncludeTenantDomain: true,
            showIncludeUserstoreDomainRole: true,
            showIncludeUserstoreDomainSubject: true,
            showRoleAttribute: true,
            showRoleMapping: true,
            showUseMappedLocalSubject: true
        },
        attributeSelection: {
            getClaims: (claims: ExtendedClaimInterface[]): ExtendedClaimInterface[] => {
                return claims;
            },
            getExternalClaims: (claims: ExtendedExternalClaimInterface[]): ExtendedExternalClaimInterface[] => {
                return claims;
            },
            showAttributePlaceholderTitle: false,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            showShareAttributesHint: (selectedDialect: SelectedDialectInterface): boolean => {
                return true;
            }
        },
        makeSubjectMandatory: true,
        roleMapping: true
    },
    editApplication: {
        extendTabs: false,
        renderHelpPanelItems: (): ReactNode => {
            return null;
        },
        showProvisioningSettings: true
    },
    inboundOIDCForm: {
        shouldValidateCertificate: true,
        showClientSecretMessage: true,
        showFrontChannelLogout: true,
        showNativeClientSecretMessage: true,
        showScopeValidators: true,
        showIdTokenEncryption: true,
        showBackChannelLogout: true,
        showRequestObjectSignatureValidation: true,
        showCertificates: true,
        showReturnAuthenticatedIdPList: true,
        disabledGrantTypes: []
    },
    infoSettings: {
        renderInfoTabExtension: () => {
            return (
                <Grid className="form-container with-max-width">
                    <Grid.Row>
                        <Grid.Column>
                            <Heading ellipsis as="h4">
                                <strong>
                                    Try out application
                                </strong>
                            </Heading>
                            <AddUserStepContent/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            );
        }
    },
    templates: {
        android: true,
        custom: true,
        oidc: true,
        saml: true,
        spa: true,
        windows: true
    }
};
