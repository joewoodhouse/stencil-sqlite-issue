import 'jeep-sqlite';
import { defineCustomElements } from 'jeep-sqlite/loader';

export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
  await defineCustomElements(window);
};
