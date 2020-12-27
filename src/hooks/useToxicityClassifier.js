import * as toxicity from '@tensorflow-models/toxicity';
import '@tensorflow/tfjs-backend-cpu';
import { useEffect, useState } from 'react';

/**
 * @returns Promise that resolves to return Toxicity ML Model
 **/

export const useToxicityClassifier = () => {
  const [toxicityModel, setToxicityModel] = useState();
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      const model = await toxicity.load();
      setToxicityModel(model);
      setModelReady(true);
    };
    loadModel();
  }, [modelReady]);

  return modelReady ? toxicityModel : null;
};
