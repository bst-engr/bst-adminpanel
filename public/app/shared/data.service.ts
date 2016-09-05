import { Injectable } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Http, Response,Headers, RequestOptions,URLSearchParams  } from '@angular/http';

@Injectable()
export class DataService {
    //set the base url
    public baseURL: string = window.location.origin;
    public __response: any;
    public __error: any;
    private __token : string = localStorage.getItem("_userChek");

    constructor(private _http: Http, private _router: Router) {

    }
    httpGet(url: string, parms?: any) {
        console.log(this.__token);
        var options = {};
        //check if there are any parameters for the request
        if (parms) {
            let params: URLSearchParams = new URLSearchParams();
            for (var key in parms) {
                var value = parms[key];
                params.set(key.toString(), value.toString());
            }
            options = { search: params };
        }
        //return the observable
        return this._http.get(this.baseURL + '/index.php/api/' + url+"?token="+this.__token, options);
    }

    httpPost(url: string, body: any) {
        body = JSON.stringify(body);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        //check if there are any parameters for the request
        // if (parms) {
        //     let params: URLSearchParams = new URLSearchParams();
        //     for (var key in parms) {
        //         var value = parms[key];
        //         params.set(key.toString(), value.toString());
        //     }
        //     options = { search: params };
        // }
        //return the observable
        return this._http.post(this.baseURL + '/index.php/api/' + url+"?token="+this.__token, body, options);
                    // .map((res:Response) => res.json())
                    // .subscribe(data => this.parseResponse(data), 
                    //         err => this.parseError(err.json())
                    //        );
        //return {'data': this.__response, 'error': this.__error};
    }

    parseResponse(_response:any) {
        this.__response = _response;
    }

    parseError(_error: any) {
        this.__error = _error;
        if(this.__error.error == 'token_expired' ) {
            localStorage.removeItem("_userChek");
            console.log('navigating to login');
            this._router.navigate(['/login']);
        }
    }
}
