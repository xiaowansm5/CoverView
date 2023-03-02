import React, { useState } from 'react';
import Header from './Header';
const Faq = () => {

    const [showMsg, setShowMsg] = useState(false)

    return (
        <div>
            <Header />

            <div className=" md:w-10/12 mx-auto md:p-20 p-4">
                <h1 className="font-bold md:text-4xl  text-2xl font-Anek text-center">经常问的问题</h1>


                <div className="flex flex-wrap justify-center mt-20 font-Inter">

                    <div className="md:w-5/12 m-4 ">
                        <p className="text-xl font-bold py-2">什么是封面视图？</p>
                        <p className="text-lg text-gray-700">Coverview 是一种可以快速轻松地为您的博客创建封面图像的工具.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold py-2">Coverview 是免费的吗？</p>
                        <p className="text-lg text-gray-700">是的！Coverview 完全免费使用.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl  font-bold py-2">我可以上传我的自定义品牌标志吗？</p>
                        <p className="text-lg text-gray-700"> <span className="font-semibold">custom</span>是的。只需在图标部分搜索并选择自定义，您就可以上传自己的徽标来个性化您的封面图片.</p>
                        <p className="italic mt-2">见 <a href="https://twitter.com/WankhadeRutik/status/1518270774335111168?s=20&t=XMjbJpGAC7anadJ690_DUg" className="text-blue-400" target="_blank" rel="noreferrer">例子</a></p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">我可以将封面视图用于非技术/个人博客吗？</p>
                        <p className="text-lg text-gray-700">是的！为什么不？尽管 coverview 是为技术博客而构建的，但您仍然可以将它用于您的个人博客。查看时尚主题了解更多信息.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">为什么要使用封面视图?</p>
                        <p className="text-lg text-gray-700">因为它简单、快速且易于使用。当您可以在几秒钟内创建封面图像时，为什么还要花费数小时进行设计?</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">想要支持/赞助该项目?</p>
                        <p className="text-lg text-gray-700">如果 coverview 为你的生活增加了价值并且你希望支持这个项目, 你可以 <a href="https://github.com/sponsors/rutikwankhade" target="_blank" rel="noreferrer" className="font-semibold hover:underline">在 Github 上赞助我</a></p>
                    </div>

                </div>

                <div className="md:w-1/2 mx-auto text-center mt-20">
                    <button
                        onClick={() => setShowMsg(!showMsg)}
                        className="text-6xl text-center m-2">💡</button>
                    <p className="text-xl font-Anek font-semibold text-gray-800">想知道一个秘密吗？点我</p>

                </div>

                {
                    showMsg ?
                        <div>
                            <h2 className="md:w-7/12 text-4xl border text-center mx-auto my-10 p-10 rounded-xl shadow-sm font-Nunito">Blog titles with a minimum of 8 words have 21% better click-through</h2>
                        </div> :
                        <div></div>
                }

            </div>
        </div>
    );
}

export default Faq;