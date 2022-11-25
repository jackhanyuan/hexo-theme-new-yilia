#!/usr/bin/python 
# -*- coding: utf-8 -*-
import qiniu
import os


#替换为自己的ak和sk
access_key = ''
secret_key = ''

#替换为自己的七牛云仓库域名
url = ''

#替换为自己的七牛云仓库名
bucket_name = ''
#指定七牛云存储路径
upload_dic_path = 'blog/photos/' 
upload_pic_path = 'blog/static/'

q = qiniu.Auth(access_key, secret_key)


def list_img_file(directory):
    """列出目录下所有文件，并筛选出图片文件列表返回"""
    old_list = os.listdir(directory)
    # print(old_list)
    new_list = []
    for filename in old_list:
        name, fileformat = filename.split(".")
        if fileformat.lower() == "jpg" or fileformat.lower() == "png" or fileformat.lower() == "gif":
            new_list.append(filename)
    # print(new_list)
    return new_list


#七牛云上传接口
def qiniu_upload(key, localfile):
    token = q.upload_token(bucket_name, key, 3600)
    ret, info = qiniu.put_file(token, key, localfile)
    if ret:
        return url + '/' + ret['key']
    else:
        return info


def qiniu_upload_directory(directory):
    for dic in directory:
        upload_list = list_img_file(dic)
        print('开始上传:', dic)
        for photo in upload_list:
            pic_path = dic + '/' + photo
            folder_name = os.path.basename(dic)
            upload_name = upload_dic_path + folder_name + '/' + photo
            res = qiniu_upload(upload_name, pic_path)
            print('\t', res)
    print('上传结束')


def qiniu_upload_file(pic):
    pic_name = os.path.basename(pic)
    upload_name = upload_pic_path + pic_name
    res = qiniu_upload(upload_name, pic)
    print('\t', res)


if __name__ == '__main__':
     print('当前工作路径', os.getcwd())
     directory = ['.\\photos', '.\\min_photos']
     qiniu_upload_directory(directory)


