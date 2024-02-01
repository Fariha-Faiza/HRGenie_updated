import React from 'react'
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from 'next/dynamic';
//const planCreateElements1 = dynamic(()=>import('@/components/systemUser/subscription-module/plan-create/planCreateElements'), { ssr: false })
 const PlanCreateElements = dynamic(()=>import('@/pages/components/systemUser/subscription-module/plan-create/planCreateElements'), { ssr: true })
const PlanCreate=() =>{
  return (
    <div>
       <Seo title={"Add Plan"}/>
  
       <PlanCreateElements/>
    
    </div>
  );
}

PlanCreate.propTypes = {};

PlanCreate.defaultProps = {};

PlanCreate.layout = "Contentlayout"
export default PlanCreate
