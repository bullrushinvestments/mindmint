import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  featureName: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpec = async () => {
      try {
        const response = await axios.get<BusinessSpecification>('https://api.example.com/business-specification');
        setSpecification(response.data);
      } catch (err) {
        setError('Failed to load business specification.');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessSpec();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' });

  return (
    <div className={clsx('p-4', { 'bg-gray-100': isTabletOrMobile, 'bg-white': !isTabletOrMobile })}>
      <h1 className="text-3xl font-bold mb-4">{specification.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{specification.description}</p>

      {specification.features.map((feature, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{feature.featureName}</h2>
          <p className="text-gray-700">{feature.details}</p>
        </div>
      ))}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  featureName: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpec = async () => {
      try {
        const response = await axios.get<BusinessSpecification>('https://api.example.com/business-specification');
        setSpecification(response.data);
      } catch (err) {
        setError('Failed to load business specification.');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessSpec();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' });

  return (
    <div className={clsx('p-4', { 'bg-gray-100': isTabletOrMobile, 'bg-white': !isTabletOrMobile })}>
      <h1 className="text-3xl font-bold mb-4">{specification.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{specification.description}</p>

      {specification.features.map((feature, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{feature.featureName}</h2>
          <p className="text-gray-700">{feature.details}</p>
        </div>
      ))}
    </div>
  );
};

export default CreateBusinessSpecification;