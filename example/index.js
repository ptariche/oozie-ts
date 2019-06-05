const OOZIE      = require('../dist/').client;
const jobGetType = require('../dist/types/').jobGetType;

const Example = async () => {
 let Oozie = new OOZIE({
  oozieUrl: 'http://127.0.0.1:11000/oozie'
 });

 const version = await Oozie.buildVersion();
 console.log(version);

 const configuration = await Oozie.configuration();
 console.log(configuration);

 const environment = await Oozie.environment();
 console.log(environment);

//  const jobs = await Oozie.getJobs();
//  console.log(jobs);

 const jobsOffset = await Oozie.getJobs(null, 2);
 console.log(jobsOffset);

 const instrumentation = await Oozie.instrumentation();
 console.log(instrumentation);

 const getJob = await Oozie.getJob(`0100030-100000000000000-oozie-oozi-W`, jobGetType.INFO);
 console.log(getJob);

 const xml = ``;
 const createJob = await Oozie.createJob(xml);
 console.log(createJob);

 const queueDump = await Oozie.queueDump();
 console.log(queueDump);

 return true;
};

Example()
  .then(result => console.log(result))
  .catch(err => console.error(err));