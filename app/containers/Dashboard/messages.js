/*
 * Dashboard Messages
 *
 * This contains all the text for the Dashboard component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Dashboard.header',
    defaultMessage: 'This is Dashboard container !',
  },
  overviewGeneral: {
    id: 'app.containers.Dashboard.overview-general',
    defaultMessage: `Looks like you haven't integrated neither our tracker nor google analytics.
    Please do so to monitor your sales and visits, as well as conversion by device and by platform
    key insights. If you also want to see your ROAS, you'll also need to integrate facebook and/or adwords.
    If you want to see historical data, you'll need the integration with Google Analytics.
    `,
  },
  overviewSalesBreakdown: {
    id: 'app.containers.Dashboard.overview-sales-breakdown',
    defaultMessage: `Looks like you haven't integrated your store with us.
    Do so to see your customers' demographics and purchasing behavior`,
  },
  clvForecast: {
    id: 'app.containers.Dashboard.clv-forecast',
    defaultMessage: `Looks like you haven't integrated your store with us. Please do so to see your
    customers' lifetime value, know which products bring you the greatest CLV, etc`,
  },
  clvListBuilder: {
    id: 'app.containers.Dashboard.clv-list-builder',
    defaultMessage: `Looks like you haven't integrated your store with us. Please do so to see your
    customer segmentation depending on their lifetime value and create custom lists. If you want to
    export those lists directly to facebook or mailchimp, connect those platforms as well.`,
  },
  marketingKeyInsights: {
    id: 'app.containers.Dashboard.marketing-key-insights',
    defaultMessage: `Looks like you haven't integrated neither our tracker nor google analytics.
    Please do so to see how metrics have changed per device and source in the last period`,
  },
  marketingSourceChannels: {
    id: 'app.containers.Dashboard.marketing-source-channels',
    defaultMessage: `Looks like you haven't integrated neither our tracker nor google analytics.
    Please do so to compare metrics between sources, like CR, ROAS, BR and more`,
  },
  marketingMetricsByDevice: {
    id: 'app.containers.Dashboard.marketing-metrics-by-device',
    defaultMessage: `Looks like you haven't integrated neither our tracker nor google analytics.
    Please do so to compare metrics between devices, like CR, ROAS, BR and more`,
  },
  marketingFacebookAudiences: {
    id: 'app.containers.Dashboard.marketing-facebook-audiences',
    defaultMessage: `Looks like you haven't integrated with facebook or retrieved the data. Please
    do so to compare your facebook audiences and adsets, and find your best performing audiences`,
  },
  marketingCustomerJourneys: {
    id: 'app.containers.Dashboard.marketing-customer-journeys',
    defaultMessage: `Looks like you haven't integrated our tracker. Please do so to see all the
    points of contact you have with your customers, see which sources have a branding behavior
    and which ones are the converting ones, and compera sales by first and last visit attribution`,
  },
  marketingBudgetAllocation: {
    id: 'app.containers.Dashboard.marketing-budget-allocation',
    defaultMessage: `Looks like you haven't integrated all the platforms with us. We need information
    from your store, google analytics and your paid marketing channels.`,
  },
  conversionKeyInsights: {
    id: 'app.containers.Dashboard.conversion-key-insights',
    defaultMessage: `Looks like you haven't integrated neither our tracker nor google analytics.
    Please do so to see how metrics have changed per device and source in the last period`,
  },
  conversionFunnels: {
    id: 'app.containers.Dashboard.conversion-funnels',
    defaultMessage: `Looks like you haven't integrated our tracker. Please do so to see how users
    behave in your page, and create funnels to analyze the user flow in your page`,
  },
  conversionCoupons: {
    id: 'app.containers.Dashboard.conversion-coupons',
    defaultMessage: `Looks like you haven't integrated your shop with us. Please do so to compare
    metrics by coupon, and see which coupons are actually working and which ones are only making
    you lose money`,
  },
  conversionShippingMethods: {
    id: 'app.containers.Dashboard.conversion-shipping-methods',
    defaultMessage: `Looks like you haven't integrated your shop with us. Please do so to compare
    shipping methods and their performance`,
  },
  productDashboard: {
    id: 'app.containers.Dashboard.product-dashboard',
    defaultMessage: `Looks like you haven't integrated your shop with us. Please do so to see
    the difference in performance between products, and a general overview of the best vs the
    not-so-good-selling ones`,
  },
  productPerProduct: {
    id: 'app.containers.Dashboard.product-per-product',
    defaultMessage: `Looks like you haven't integrated your shop with us. Please do so to see
    all the metrics for a specific product, including  the source from which users come to buy
    it (for this you also need our tracker or analytics), how many times it was bought with
    a coupon, in a bundle, etc`,
  },
});
