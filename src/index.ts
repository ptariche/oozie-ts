import Axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import {
  apiVersion,
  serviceVersion,
  httpMethods,
  typeOozieConfig,
  versionFunction,
  retrieveFunction,
  statusFunction,
  setStatusFunction,
  environmentFunction,
  javaSystemFunction,
  configurationFunction,
  instrumentationFunction,
  buildVersionFunction,
  availableTimezonesFunction,
  queueDumpFunction,
  jobSubmissionFunction,
  jobSubmissionMapReduceFunction,
  jobSubmissionPigFunction,
  jobSubmissionHiveFunction,
  manageJobFunction,
  jobAction,
  getJobFunction,
  getJobsFunction
} from './types/';

class Oozie {
  protected config: typeOozieConfig;
  protected axios: AxiosInstance;

  constructor (config: typeOozieConfig) {
    if (!config.oozieUrl) {
      throw new Error ('A Oozie Url is required');
    }

    if (!config.apiVersion)     config.apiVersion     = apiVersion.ONE;
    if (!config.serviceVersion) config.serviceVersion = serviceVersion.FOUR;

    const _axios:AxiosInstance = Axios.create({
      baseURL: config.oozieUrl,
      timeout: config.timeout || 10000,
    });

    _axios.interceptors.response.use(
      (response: AxiosResponse) => response && response.data ? response.data : null,
      (error: AxiosError) => {
        return Promise.reject(
          error.response &&
          error.response.data
        );
      }
    );

    this.axios  = _axios;
    this.config = config;
  };

  private retrieve:retrieveFunction = (method, route, body, options) => {
    switch (method) {
      case httpMethods.GET: 
        return this.axios[method](route);
      break;
      case httpMethods.PUT: 
        return this.axios[method](route, body, options);
      break;
      case httpMethods.POST: 
        return this.axios[method](route, body, options);
      break;
      case httpMethods.DELETE: 
        return this.axios[method](route);
      break;
    }
  };

  private xmlHeader = () => {
    return {headers: {'Content-Type': 'text/xml'}};
  }

  private xmlStatement = () => {
    return `<?xml version="1.0" encoding="UTF-8"?>`;
  }

  private getVersion = (version: number) => {
    return version ? version : this.config.apiVersion;
  }

  public versions:versionFunction = async () => {
    return await this.retrieve(httpMethods.GET, '/versions');
  };

  public status:statusFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/status`);
  };

  public setStatus:setStatusFunction  = async (mode, version) => {
    if (!mode) throw new Error('Mode is required');
    return await this.retrieve(httpMethods.PUT, `/v${this.getVersion(version)}/admin/status?systemmode=${mode}`, null);
  };

  public environment:environmentFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/os-env`);
  };

  public javaSystem:javaSystemFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/java-sys-properties`);
  };

  public configuration:configurationFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/configuration`);
  };

  public instrumentation:instrumentationFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/instrumentation`);
  };

  public buildVersion:buildVersionFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/build-version`);
  };

  public availableTimezones:availableTimezonesFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/available-timezones`);
  };

  public queueDump:queueDumpFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/queue-dump`);
  };

  public createJob:jobSubmissionFunction = async (xml, version) => {
    if (!xml) throw new Error('XML is required');
    return await this.retrieve(httpMethods.POST, `/v${this.getVersion(version)}/jobs`, xml, this.xmlHeader());
  };

  public createProxyMapReduceJob:jobSubmissionMapReduceFunction = async (options) => {
    if (!options) throw new Error('options are required');
    if (!options.nameNode) throw new Error('nameNode is required');
    if (!options.jobTracker) throw new Error('jobTracker is required');
    if (!options.mapTaskClassname) throw new Error('mapTaskClassname is required');
    if (!options.reducerClassname) throw new Error('reducerClassname is required');
    if (!options.inputDirectory) throw new Error('inputDirectory is required');
    if (!options.outputDirectory) throw new Error('outputDirectory is required');
    if (!options.oozieLibPath) throw new Error('oozieLibPath is required');
    if (!options.userName) throw new Error('userName is required');

    const xml = `
      ${this.xmlStatement()}
      <configuration>
          <property>
              <name>fs.default.name</name>
              <value>${options.nameNode}</value>
          </property>
          <property>
              <name>mapred.job.tracker</name>
              <value>${options.jobTracker}</value>
          </property>
          <property>
              <name>mapred.mapper.class</name>
              <value>${options.mapTaskClassname}</value>
          </property>
          <property>
              <name>mapred.reducer.class</name>
              <value>${options.reducerClassname}</value>
          </property>
          <property>
              <name>mapred.input.dir</name>
              <value>${options.inputDirectory}</value>
          </property>
          <property>
              <name>mapred.output.dir</name>
              <value>${options.outputDirectory}</value>
          </property>
          <property>
              <name>user.name</name>
              <value>${options.userName}</value>
          </property>
          <property>
              <name>oozie.libpath</name>
              <value>${options.oozieLibPath}</value>
          </property>
          <property>
              <name>oozie.proxysubmission</name>
              <value>${options.oozieProxySubmission || 'true'}</value>
          </property>
      </configuration>
    `;
    return await this.retrieve(httpMethods.POST, `/v${this.getVersion(options.apiVersion)}/jobs?type=mapreduce`, xml, this.xmlHeader());
  };
  
  public createProxyPigJob:jobSubmissionPigFunction = async (options) => {
    if (!options) throw new Error('options are required');
    if (!options.nameNode) throw new Error('nameNode is required');
    if (!options.jobTracker) throw new Error('jobTracker is required');
    if (!options.pigScript) throw new Error('pigScript is required');
    if (!options.oozieLibPath) throw new Error('oozieLibPath is required');
    if (!options.userName) throw new Error('userName is required');

    const xml = `
      ${this.xmlStatement()}
      <configuration>
          <property>
              <name>fs.default.name</name>
              <value>${options.nameNode}</value>
          </property>
          <property>
              <name>mapred.job.tracker</name>
              <value>${options.jobTracker}</value>
          </property>
          <property>
              <name>oozie.pig.script</name>
              <value>${options.pigScript}</value>
          </property>
          <property>
              <name>oozie.libpath</name>
              <value>${options.oozieLibPath}</value>
          </property>
          <property>
              <name>user.name</name>
              <value>${options.userName}</value>
          </property>
          <property>
              <name>oozie.proxysubmission</name>
              <value>${options.oozieProxySubmission || 'true'}</value>
          </property>
      </configuration>
    `;
    return await this.retrieve(httpMethods.POST, `/v${this.getVersion(options.apiVersion)}/jobs?type=pig`, xml, this.xmlHeader());
  };

  public createHiveJob:jobSubmissionHiveFunction = async (options) => {
    if (!options) throw new Error('options are required');
    if (!options.nameNode) throw new Error('nameNode is required');
    if (!options.jobTracker) throw new Error('jobTracker is required');
    if (!options.hiveScript) throw new Error('hiveScript is required');
    if (!options.oozieLibPath) throw new Error('oozieLibPath is required');
    if (!options.userName) throw new Error('userName is required');

    const xml = `
      ${this.xmlStatement()}
      <configuration>
          <property>
              <name>fs.default.name</name>
              <value>${options.nameNode}</value>
          </property>
          <property>
              <name>mapred.job.tracker</name>
              <value>${options.jobTracker}</value>
          </property>
          <property>
            <name>oozie.hive.script</name>
            <value>
              ${options.hiveScript}
            </value>
          </property>
          <property>
              <name>user.name</name>
              <value>${options.userName}</value>
          </property>
          <property>
              <name>oozie.libpath</name>
              <value>${options.oozieLibPath}</value>
          </property>
          <property>
              <name>oozie.proxysubmission</name>
              <value>${options.oozieProxySubmission || 'true'}</value>
          </property>
      </configuration>
    `;
    return await this.retrieve(httpMethods.POST, `/v${this.getVersion(options.apiVersion)}/jobs?type=mapreduce`, xml, this.xmlHeader());
  };

  public manageJob:manageJobFunction = async (jobId, action, xml, options, version) => {
    if (!jobId) throw new Error('An jobId is required');
    if (!action) throw new Error('An action is required');

    let path: string = `/v${this.getVersion(version)}/job/${jobId}?action=${action}`;

    if (action === jobAction.COORD_RERUN) {
      path+= `&type=${options.type}&refresh=${options.refresh ? options.refresh : false}&nocleanup=${options.nocleanup ? options.nocleanup : false}${options.scope ? `&scope=${options.scope}` : ''}`;
    } else if ( action === jobAction.BUNDLE_RERUN) {
      path+= `&refresh=${options.refresh ? options.refresh : false}&nocleanup=${options.nocleanup ? options.nocleanup : false}`;
    } else if ( action === jobAction.CHANGE) {
      if (!options.value) throw new Error('A Value is required to be changed');
      path+= `&value=${options.value}`;
    }

    return await this.retrieve(httpMethods.PUT, path, xml ? xml : null, this.xmlHeader());
  };

  public getJob:getJobFunction = async (jobId, show, timezone, version) => {
    if (!jobId) throw new Error('An jobId is required');

    let path:string = `/v${this.getVersion(version)}/job/${jobId}?`;

    if (show)     path += `show=${show}`;
    if (timezone) path += `&timezone=${timezone}`;

    return await this.retrieve(httpMethods.GET, path);
  };

  public getJobs:getJobsFunction = async (filter, offset, limit, timezone, version) => {
    let path:string = `/v${this.getVersion(version)}/jobs?`;

    if (filter)   path += `filter=${encodeURIComponent(filter)}`;
    if (offset)   path += `&offset=${offset}`;
    if (limit)    path += `&len=${limit}`;
    if (timezone) path += `&timezone=${timezone}`;

    return await this.retrieve(httpMethods.GET, path);
  };

};

export default Oozie;

