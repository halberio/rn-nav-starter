import {gql} from '@apollo/client';

// login the user as visitor 🌔
export const loginVisitorMutationName = 'loginVisitor';

export const LOGIN_VISITOR = gql`
  mutation loginVisitor {
    loginVisitor {
      token
      visitor {
        id

        user_agent
        created_at
        updated_at
      }
    }
  }
`;

// login the user mutation 🌔
export const loginMutationName = 'login';

export const LOGIN = gql`
  mutation login(
    $password: String!
    $email: String
    $phone: String
    $device_token: String
  ) {
    login(
      password: $password
      email: $email
      phone: $phone
      device_token: $device_token
    ) {
      token
      user {
        id
        phone
        email
        name
        username
        birthdate
        interests {
          id
          interest
        }
        avatar
        cover
        gender
        location
        biography
        following_waiting
        website
        created_at
        updated_at
        setting {
          id
          private_profile
          anonymous_profile
          get_public_content
          dark_mode
          hide_email
          hide_phone
        }
      }
    }
  }
`;

// logout the user mutation 🌔
export const logoutMutationName = 'logout';

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

// sign up mutation 😎
export const signUpMutationName = 'signUp';

export const SIGNUP = gql`
  mutation signUp($input: SignUpInput) {
    signUp(input: $input) {
      token

      user {
        id
        phone
        email
        name
        username
        following_waiting
        birthdate
        avatar
        cover
        gender
        interests {
          id
          interest
        }
        location
        biography
        website
        created_at
        updated_at
        setting {
          id
          private_profile
          anonymous_profile
          get_public_content
          dark_mode
          hide_email
          hide_phone
        }
      }
    }
  }
`;

//update password ( forgot or update after code confirmation)

export const updatePasswordMutationName = 'updatePassword';

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $password: String!
    $passwordConfirmation: String!
    $currentPassword: String
    $email: String
    $phone: String
  ) {
    updatePassword(
      password: $password
      passwordConfirmation: $passwordConfirmation
      currentPassword: $currentPassword
      email: $email
      phone: $phone
    )
  }
`;

//update profile data

export const updateMutationName = 'update';

export const UPDATE = gql`
  mutation update($input: UpdateInput!) {
    update(input: $input) {
      id
    }
  }
`;

//update my interests

export const updateMyInterestsMutationName = 'updateMyInterests';

export const UPDATE_MY_INTERESTS = gql`
  mutation updateMyInterests($interests: [String]!) {
    updateMyInterests(interests: $interests) {
      id
      interest
    }
  }
`;

//update cover

export const updateCoverMutationName = 'updateCover';

export const UPDATE_COVER = gql`
  mutation updateCover($cover: Upload!) {
    updateCover(cover: $cover) {
      id
    }
  }
`;

//update avatar

export const updateAvatarMutationName = 'updateAvatar';

export const UPDATE_AVATAR = gql`
  mutation updateAvatar($avatar: String!) {
    updateAvatar(avatar: $avatar) {
      id
    }
  }
`;

//update my settings

export const updateMySettingMutationName = 'updateMySetting';

export const UPDATE_MY_SETTINGS = gql`
  mutation updateMySetting($input: UpdateMySettingInput!) {
    updateMySetting(input: $input) {
      id
      setting {
        private_profile
        anonymous_profile
        get_public_content
        dark_mode
        hide_email
        hide_phone
      }
    }
  }
`;

//update my notifications settings

export const updateMyNotificationSettingMutationName =
  'updateMyNotificationSetting';

export const UPDATE_MY_NOTIFICATION_SETTINGS = gql`
  mutation updateMyNotificationSetting(
    $input: UpdateMyNotificationSettingInput!
  ) {
    updateMyNotificationSetting(input: $input) {
      id
      notification_setting {
        id
        mute_all
        whistleblowing
        alert
        comments
        ups_downs
        supports
        views
        ireveal
      }
    }
  }
`;

//social login

export const socialLoginMutationName = 'socialLogin';

export const SOCIAL_LOGIN = gql`
  mutation socialLogin(
    $provider_id: String!
    $provider: String!
    $name: String!
    $device_token: String!
    $email: String!
  ) {
    socialLogin(
      provider_id: $provider_id
      provider: $provider
      name: $name
      device_token: $device_token
      email: $email
    ) {
      token
      user {
        id
        phone
        email
        name
        username
        birthdate
        interests {
          id
          interest
        }
        avatar
        cover
        gender
        location
        biography
        following_waiting
        website
        created_at
        updated_at
        setting {
          id
          private_profile
          anonymous_profile
          get_public_content
          dark_mode
          hide_email
          hide_phone
        }
      }
    }
  }
`;

// send phone email

export const sendVerificationCodeToEmailMutationName =
  'sendVerificationCodeToEmail';

export const SEND_VERIFICATION_CODE_TO_EMAIL = gql`
  mutation sendVerificationCodeToEmail($email: String!) {
    sendVerificationCodeToEmail(email: $email)
  }
`;
// send phone code

export const sendVerificationCodeToPhoneMutationName =
  'sendVerificationCodeToPhone';

export const SEND_VERIFICATION_CODE_TO_PHONE = gql`
  mutation sendVerificationCodeToPhone($phone: String!) {
    sendVerificationCodeToPhone(phone: $phone)
  }
`;

// send code to email and phone

export const sendCodeToEmailAndPhoneMutationName = 'sendCodeToEmailAndPhone';

export const SEND_CODE_TO_EMAIL_AND_PHONE = gql`
  mutation sendCodeToEmailAndPhone {
    sendCodeToEmailAndPhone
  }
`;

//update password ( forgot or update after code confirmation)

export const updateNewPasswordMutationName = 'updatePassword';

export const UPDATE_NEW_PASSWORD = gql`
  mutation updatePassword(
    $password: String!
    $passwordConfirmation: String!
    $email: String
    $phone: String
  ) {
    updatePassword(
      password: $password
      passwordConfirmation: $passwordConfirmation
      email: $email
      phone: $phone
    )
  }
`;
