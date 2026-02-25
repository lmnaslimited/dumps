import type { Schema, Struct } from '@strapi/strapi';

export interface CoreButton extends Struct.ComponentSchema {
  collectionName: 'components_core_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    benefitMode: Schema.Attribute.Enumeration<
      ['roi_calculator', 'pipeline_audit', 'cpq_maturity']
    >;
    description: Schema.Attribute.Text;
    formMode: Schema.Attribute.Enumeration<
      ['booking', 'contact', 'download', 'undefined']
    >;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['default', 'outline', 'ghost', 'secondary', 'destructive', 'ink']
    >;
  };
}

export interface CoreContact extends Struct.ComponentSchema {
  collectionName: 'components_core_contacts';
  info: {
    description: '';
    displayName: 'Contact';
  };
  attributes: {
    address: Schema.Attribute.String;
    description: Schema.Attribute.String;
    emailHref: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    label: Schema.Attribute.String;
    phoneHref: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    websiteHref: Schema.Attribute.String;
    websiteLabel: Schema.Attribute.String;
  };
}

export interface CoreFormField extends Struct.ComponentSchema {
  collectionName: 'components_core_form_fields';
  info: {
    description: '';
    displayName: 'FormField';
  };
  attributes: {
    defaultValue: Schema.Attribute.String;
    fieldDisplay: Schema.Attribute.Enumeration<
      [
        'Half Width, Right Padding',
        'Half Width, Left Padding',
        'Full Width, Small Bottom Space',
        'Half Width on Tablet, Right Padding',
        'Half Width on Tablet, Left Padding',
        'Full Width, Larger Bottom Space',
        'Half Width on Tablet, Right Padding Medium 2.5',
        'Half Width on Tablet, Left Padding Medium 2.5',
        'Half Width on Tablet, Right Padding Small',
        'Half Width on Tablet, Left Padding Small',
        'Half Width on Tablet, Small Bottom Space',
        'Full Width, Medium Right Padding 2.5',
        'Full Width, Medium Left Padding 2.5',
        'Half Width on Tablet (No Margin)',
        'Full Width (No Margin)',
      ]
    >;
    loading: Schema.Attribute.Component<'core.highlight', false>;
    name: Schema.Attribute.Enumeration<
      [
        'name',
        'date',
        'email',
        'phone',
        'timezone',
        'timeSlot',
        'message',
        'newsletter',
        'enquiryType',
        'company',
        'job',
        'product',
      ]
    >;
    options: Schema.Attribute.Component<'core.options', true>;
    placeholder: Schema.Attribute.Text;
    required: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<
      [
        'date',
        'timezone',
        'timeslot',
        'text',
        'phone',
        'email',
        'textarea',
        'checkbox',
        'select',
      ]
    >;
    validationMessage: Schema.Attribute.Text;
  };
}

export interface CoreHeader extends Struct.ComponentSchema {
  collectionName: 'components_core_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    badge: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CoreHighlight extends Struct.ComponentSchema {
  collectionName: 'components_core_highlights';
  info: {
    description: '';
    displayName: ' Highlight';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.Text;
    type: Schema.Attribute.String;
  };
}

export interface CoreImage extends Struct.ComponentSchema {
  collectionName: 'components_core_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    alternate: Schema.Attribute.String;
    source: Schema.Attribute.String;
    svg: Schema.Attribute.String;
  };
}

export interface CoreOptions extends Struct.ComponentSchema {
  collectionName: 'components_core_options';
  info: {
    displayName: 'Options';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface CorePlan extends Struct.ComponentSchema {
  collectionName: 'components_core_plans';
  info: {
    displayName: 'Plan';
    icon: '';
  };
  attributes: {
    consulting: Schema.Attribute.String;
    db: Schema.Attribute.String;
    maintenance: Schema.Attribute.String;
    name: Schema.Attribute.String;
    support: Schema.Attribute.String;
    users: Schema.Attribute.String;
    warranty: Schema.Attribute.String;
  };
}

export interface CoreSeoIcons extends Struct.ComponentSchema {
  collectionName: 'components_core_seo_icons';
  info: {
    description: '';
    displayName: 'SEO Icons';
  };
  attributes: {
    alt: Schema.Attribute.String;
    height: Schema.Attribute.BigInteger;
    sizes: Schema.Attribute.String;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
    width: Schema.Attribute.BigInteger;
  };
}

export interface CoreTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_core_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.String;
    title: Schema.Attribute.String;
    verify: Schema.Attribute.String;
  };
}

export interface SharedCallout extends Struct.ComponentSchema {
  collectionName: 'components_shared_callouts';
  info: {
    description: '';
    displayName: 'Callout';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'core.button', true>;
    header: Schema.Attribute.Component<'core.header', false>;
    list: Schema.Attribute.Component<'core.highlight', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    avatar: Schema.Attribute.Component<'core.image', false>;
    avatarDetails: Schema.Attribute.Component<'core.highlight', false>;
    buttons: Schema.Attribute.Component<'core.button', true>;
    category: Schema.Attribute.String;
    header: Schema.Attribute.Component<'core.header', false>;
    image: Schema.Attribute.Component<'core.image', false>;
    link: Schema.Attribute.Component<'core.button', true>;
    list: Schema.Attribute.Component<'core.highlight', true>;
    tag: Schema.Attribute.String;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    button: Schema.Attribute.Component<'core.button', true>;
    card: Schema.Attribute.Component<'shared.card', false>;
    header: Schema.Attribute.Component<'core.header', false>;
    image: Schema.Attribute.Component<'core.image', false>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'core.button', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'core.header', false>;
    highlight: Schema.Attribute.Component<'core.highlight', true>;
    image: Schema.Attribute.Component<'core.image', false>;
  };
}

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    description: '';
    displayName: 'Location';
  };
  attributes: {
    badge: Schema.Attribute.String;
    contacts: Schema.Attribute.Component<'core.highlight', true>;
    description: Schema.Attribute.Text;
    index: Schema.Attribute.String;
    isReversed: Schema.Attribute.Boolean;
    navigation: Schema.Attribute.Component<'core.button', false>;
    svg: Schema.Attribute.Component<'core.image', false>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SharedPageMetadata extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_metadata';
  info: {
    description: '';
    displayName: 'Page Metadata';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    keywords: Schema.Attribute.Component<'core.highlight', true>;
    ogDescription: Schema.Attribute.String;
    ogImages: Schema.Attribute.Component<'core.seo-icons', true>;
    ogLocale: Schema.Attribute.String;
    ogSiteName: Schema.Attribute.String;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.Enumeration<
      [
        'website',
        'article',
        'book',
        'profile',
        'music.song',
        'music.album',
        'music.playlist',
        'music.radio_station',
        'video.movie',
        'video.episode',
        'video.tv_show',
        'video.other',
      ]
    >;
    ogUrl: Schema.Attribute.String;
    schemaData: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image', 'player', 'app']
    >;
    twitterCreator: Schema.Attribute.String;
    twitterDescription: Schema.Attribute.String;
    twitterImage: Schema.Attribute.String;
    twitterTitle: Schema.Attribute.String;
  };
}

export interface SharedPlanFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_plan_features';
  info: {
    description: '';
    displayName: 'PlanFeature';
  };
  attributes: {
    features: Schema.Attribute.Component<'core.highlight', true>;
    pricingPlans: Schema.Attribute.Component<'core.plan', true>;
    tableHead: Schema.Attribute.String;
  };
}

export interface SharedSolution extends Struct.ComponentSchema {
  collectionName: 'components_shared_solutions';
  info: {
    description: '';
    displayName: 'Solution';
  };
  attributes: {
    details: Schema.Attribute.Component<'core.highlight', true>;
    footer: Schema.Attribute.Component<'shared.hero', false>;
    products: Schema.Attribute.Component<'core.highlight', true>;
    results: Schema.Attribute.Component<'core.header', true>;
    successCard: Schema.Attribute.Component<'shared.card', false>;
    testimonial: Schema.Attribute.Component<'core.testimonial', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTeckStack extends Struct.ComponentSchema {
  collectionName: 'components_shared_teck_stacks';
  info: {
    description: '';
    displayName: 'TeckStack';
  };
  attributes: {
    heading: Schema.Attribute.Component<'core.header', false>;
    point: Schema.Attribute.Component<'core.highlight', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'core.button': CoreButton;
      'core.contact': CoreContact;
      'core.form-field': CoreFormField;
      'core.header': CoreHeader;
      'core.highlight': CoreHighlight;
      'core.image': CoreImage;
      'core.options': CoreOptions;
      'core.plan': CorePlan;
      'core.seo-icons': CoreSeoIcons;
      'core.testimonial': CoreTestimonial;
      'shared.callout': SharedCallout;
      'shared.card': SharedCard;
      'shared.feature': SharedFeature;
      'shared.hero': SharedHero;
      'shared.location': SharedLocation;
      'shared.page-metadata': SharedPageMetadata;
      'shared.plan-feature': SharedPlanFeature;
      'shared.solution': SharedSolution;
      'shared.teck-stack': SharedTeckStack;
    }
  }
}
