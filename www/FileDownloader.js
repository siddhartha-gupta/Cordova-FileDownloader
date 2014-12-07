var cordova = require('cordova'),
	exec = require('cordova/exec');

(function(win, module) {
	function FileDownloader() {}

	FileDownloader.prototype = function() {
		var filesToDownload = [],
			successCallback = null,
			errorCallback = null,
			completeCallback = null,

			/**
			 * download mutiple files at once
			 *
			 * @params {Object}
			 * data - arr object contain info of files to download
			 *	data[0].url, data[0].fileName
			 * successCallback: callback fired after every file, if file is downloaded successfully
			 * errorCallback: callback fired after every file, if file is not downloaded successfully
			 * completeCallback: callback when all files are downloaded
			 */
			downloadMultipleFiles = function(params) {
				// arr, progressCallback, successCallback, errorCallback

				filesToDownload = params.data.slice(0);
				successCallback = params.successCallback || null;
				errorCallback = params.errorCallback || null;
				completeCallback = params.completeCallback || null;
				downloadRecursively();
			},

			downloadRecursively = function() {
				if(filesToDownload.length > 0) {

				} else {

				}
			},

			/**
			 * download single file
			 *
			 * @params {Object}
			 * data - arr object contain info of files to download
			 *	data[0].url, data[0].fileName
			 * successCallback: error callback
			 * fileDownloaded: callback whenever a file is downloaded
			 * errorCallback: error callback
			 */
			downloadFile = function(params) {
				this.fileDownloadCallback = params.callback;

				exec(function(filePath) {
						console.log('fileDownloader success: ' + result);
						this.fileDownloadCallback(filePath);
					},
					function(error) {
						console.log("fileDownloader error: " + error);
						this.errorCallback(error);
					},
					"FileDownloader",
					"downloadFile", [params.url, params.file]
				);
			},

			resetAttrs = function() {
			};


		return {
			'downloadMultipleFiles': downloadMultipleFiles,
			'downloadFile': downloadFile
		};
	}();

	win.fileDownloader = new FileDownloader();
	module.exports = fileDownloader;
})(window, module);