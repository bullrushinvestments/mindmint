import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
      setRequirements(response.data.requirements);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requirements.');
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset } = useForm<Requirement>();

  const onSubmit = async (data: Requirement) => {
    try {
      await axios.post('/api/requirements', data);
      fetchRequirements();
      reset();
    } catch (err) {
      setError('Failed to add requirement.');
    }
  };

  return (
    <div className="p-6">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div role="alert" aria-live="assertive">{error}</div>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                type="text"
                {...register('title', { required: true })}
                className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                {...register('description', { required: true })}
                rows={4}
                className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Requirement
            </button>
          </form>

          <div className="mt-8">
            {requirements.map((requirement) => (
              <div key={requirement.id} className="mb-4 p-4 border rounded-md bg-gray-50">
                <h3 className="text-lg font-medium">{requirement.title}</h3>
                <p>{requirement.description}</p>
                <button
                  onClick={() => {}}
                  className="ml-auto text-blue-600 hover:text-blue-900"
                >
                  Mark as Completed
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
      setRequirements(response.data.requirements);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requirements.');
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset } = useForm<Requirement>();

  const onSubmit = async (data: Requirement) => {
    try {
      await axios.post('/api/requirements', data);
      fetchRequirements();
      reset();
    } catch (err) {
      setError('Failed to add requirement.');
    }
  };

  return (
    <div className="p-6">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div role="alert" aria-live="assertive">{error}</div>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                type="text"
                {...register('title', { required: true })}
                className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                {...register('description', { required: true })}
                rows={4}
                className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Requirement
            </button>
          </form>

          <div className="mt-8">
            {requirements.map((requirement) => (
              <div key={requirement.id} className="mb-4 p-4 border rounded-md bg-gray-50">
                <h3 className="text-lg font-medium">{requirement.title}</h3>
                <p>{requirement.description}</p>
                <button
                  onClick={() => {}}
                  className="ml-auto text-blue-600 hover:text-blue-900"
                >
                  Mark as Completed
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GatherRequirements;