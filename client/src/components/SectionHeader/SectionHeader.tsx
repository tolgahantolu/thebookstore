import React from 'react';

const SectionHeader: React.FunctionComponent<{
  dataTestID: string;
  title: string;
  subTitle: string;
  additionalInfo: string | number;
}> = ({ dataTestID, title, subTitle, additionalInfo }) => {
  return (
    <>
      <h1 data-testid={dataTestID} className="text-3xl sm:text-4xl font-medium">
        {title}
      </h1>
      <p className="text-base sm:text-lg font-thin">
        {subTitle} {additionalInfo && additionalInfo}
      </p>
    </>
  );
};

export default SectionHeader;
