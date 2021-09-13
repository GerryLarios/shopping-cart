import React, { FunctionComponent } from 'react';

const SectionWrapper: FunctionComponent<{ title: string }> = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    <div>
      {children}
    </div>
  </div>
)

export default SectionWrapper
