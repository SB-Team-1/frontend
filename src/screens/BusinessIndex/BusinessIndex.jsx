import React from "react";
import BusinessIndexCards from './components/cards/businessCards'

export default function BusinessIndex({businesses}) {
  return <div>{businesses.map(business => <BusinessIndexCards business={business}/>)}</div>;
}
