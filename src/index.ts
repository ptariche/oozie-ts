import Axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import {
  apiVersion,
  serviceVersion,
  httpMethods,
  typeOozieConfig, 
  retrieveFunction,
  statusFunction,
  setStatusFunction,
  environmentFunction,
  javaSystemFunction,
  configurationFunction,
  instrumentationFunction,
  buildVersionFunction,
  availableTimezonesFunction,
  queueDumpFunction
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

  private retrieve:retrieveFunction = (method, route, body) => {
    switch (method) {
      case httpMethods.GET: 
        return this.axios[method](route);
      break;
      case httpMethods.PUT: 
        return this.axios[method](route, body);
      break;
      case httpMethods.POST: 
        return this.axios[method](route, body);
      break;
      case httpMethods.DELETE: 
        return this.axios[method](route);
      break;
    }
  };

  private getVersion = (version: number) => {
    return version ? version : this.config.apiVersion;
  }

  public versions = async () => {
    return await this.retrieve(httpMethods.GET, '/versions', null);
  };

  public status:statusFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/status`, null);
  };

  public setStatus:setStatusFunction  = async(mode, version) => {
    return await this.retrieve(httpMethods.PUT, `/v${this.getVersion(version)}/admin/status?systemmode=${mode}`, null);
  };

  public environment:environmentFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/os-env`, null);
  };

  public javaSystem:javaSystemFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/java-sys-properties`, null);
  };

  public configuration:configurationFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/configuration`, null);
  };

  public instrumentation:instrumentationFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/instrumentation`, null);
  };

  public buildVersion:buildVersionFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/build-version`, null);
  };

  public availableTimezones:availableTimezonesFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/available-timezones`, null);
  };

  public queueDump:queueDumpFunction = async (version) => {
    return await this.retrieve(httpMethods.GET, `/v${this.getVersion(version)}/admin/queue-dump`, null);
  };

}

export default Oozie;

