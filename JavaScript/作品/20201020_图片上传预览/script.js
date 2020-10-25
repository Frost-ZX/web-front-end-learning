function imageUploadInit(element, ctrl) {
    var imageList = element.querySelector(".image-list ul"); // 图片列表
    var btnAdd = imageList.querySelector(".btn-add");        // 按钮 - 添加图片
    var inputFile = imageList.querySelector("#input-file");  // 按钮 - 添加图片 - 文件 input

    if (typeof (FileReader) === 'undefined') {
        alert('您的浏览器不支持 FileReader');
    } else {
        var reader = new FileReader();
        inputFile.onchange = function () {
            var self = this;
            var files = this.files;  // 选择的文件
            var filesInfo = {
                count: files.length, // 文件数量
                index: 0             // 当前读取的文件
            }

            // 没有文件
            if (filesInfo.count == 0) {
                return false;
            }

            var loadFile = function (file, info) {
                var selfArguments = arguments;

                // 控制：文件类型
                var fileType = file[info.index].type.split('/')[1];
                if (ctrl.types.indexOf(fileType) == -1) {
                    alert(`文件类型 ${fileType} 不支持`);
                    return false;
                }

                // 控制：文件大小
                // .size - 文件大小（单位：byte）
                var fileSize = file[info.index].size / 1024 / 1024;
                if (fileSize > ctrl.size) {
                    alert(`上传的文件大小不能超过 ${ctrl.size}MB`);
                    return false;
                }

                // 以 DataURL 方式读取文件
                reader.readAsDataURL(file[info.index]);

                // 文件已读取
                reader.onload = function () {
                    var item = document.createElement('li');
                    var base64 = this.result;

                    // 创建图片对象
                    var image = new Image();
                    image.src = base64;

                    image.onload = function () {
                        // 图片原始尺寸
                        var natureHeight = image.naturalHeight;
                        var natureWidth = image.naturalWidth;
                        var ctrlHeight = ctrl.scale.h;
                        var ctrlWidth = ctrl.scale.w;
                        // 控制：图片比例
                        if (natureHeight / natureWidth != ctrlHeight / ctrlWidth) {
                            alert(`图片宽高比应为 ${ctrlWidth}:${ctrlHeight}`);
                        } else {
                            // 图片比例正确
                            item.style.backgroundImage = `url("${base64}")`;
                            item.onclick = function () {
                                // 点击移除
                                this.remove();
                            }
                            imageList.insertBefore(item, btnAdd);
        
                            info.index += 1;
        
                            // 多个文件，递归读取
                            // 读取完毕，重置 input
                            info.index < info.count ? selfArguments.callee(file, info) : self.value = '';
                        }
                    }
                }
            }

            loadFile(files, filesInfo, ctrl);
        }
    }
}

window.onload = function () {
    var imageUpload = document.querySelector('#image-upload');
    var fileControl = {
        // 文件类型
        types: ['gif', 'jpeg', 'png', 'webp'],
        // 图片比例
        scale: {h: 2, w: 1},
        // 文件大小，单位 MB
        size: 0.1
    }
    imageUploadInit(imageUpload, fileControl);
}
