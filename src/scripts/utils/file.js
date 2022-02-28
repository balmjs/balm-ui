const UI_FILE = {
  ERROR: {
    NON_IMAGE: 1, // 无法预览非图片类型的文件
    NOT_PREVIEWABLE: 2 // 当前浏览器不支持本地预览
  },
  tmpFileId() {
    const cryptoObj = window.crypto || window.msCrypto; // for IE 11

    let arr = new Uint32Array(8);
    cryptoObj.getRandomValues(arr);

    let result = '';
    for (let i = 0, len = arr.length; i < len; i++) {
      result += (i < 2 || i > 5 ? '' : '-') + arr[i].toString(16).slice(-4);
    }

    return result;
  },
  createFileObject(file) {
    let { lastModified, name, size, type } = file;

    return {
      tmpId: UI_FILE.tmpFileId(),
      lastModified,
      name,
      size,
      type,
      sourceFile: file
    };
  },
  getPreviewSrc(fileObj) {
    return new Promise((resolve, reject) => {
      if (fileObj.type.startsWith('image/')) {
        if (window.URL) {
          resolve(window.URL.createObjectURL(fileObj.sourceFile));
        } else if (window.FileReader) {
          let reader = new FileReader();
          reader.onload = function (event) {
            resolve(event.target.result);
          };
          reader.readAsDataURL(fileObj.sourceFile);
        } else {
          reject(UI_FILE.ERROR.NOT_PREVIEWABLE);
        }
      } else {
        reject(UI_FILE.ERROR.NON_IMAGE);
      }
    });
  },
  async handlePreview(fileObj) {
    fileObj.previewSrc = '';
    fileObj.previewError = 0;
    try {
      fileObj.previewSrc = await UI_FILE.getPreviewSrc(fileObj);
    } catch (e) {
      fileObj.previewError = e;
    }
  }
};

async function handleFileChange(props, event, callback) {
  const files = [].slice.call(event.target.files);

  if (files.length) {
    const result = await Promise.all(
      files.map(async (file) => {
        const fileObj = UI_FILE.createFileObject(file);
        props.preview && (await UI_FILE.handlePreview(fileObj));
        return Promise.resolve(fileObj);
      })
    );

    callback(result);
    event.target.value = '';
  }
}

export default handleFileChange;
