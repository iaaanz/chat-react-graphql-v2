import Head from 'next/head';
import dynamic from 'next/dynamic';

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Chat</title>
      </Head>

      <main>
        <h1 className='title'>Chat</h1>
        <AblyChatComponent />
      </main>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: 1fr 100px;
          min-height: 100vh;
          background-color: #eee;
        }

        main {
          display: grid;
          grid-template-rows: auto 1fr;
          width: calc(100% - 40px);
          max-width: 900px;
          margin: 20px auto;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.2);
          background-color: white;
        }

        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          margin: 0;
          color: white;
          background: #612f74;
          background: -webkit-linear-gradient(to right, #612f74, #80588f);
          background: linear-gradient(to right, #612f74, #80588f);
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        [data-author='me'] {
          background: linear-gradient(
            to right,
            #612f74,
            #80588f
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 0 !important;
          border-bottom-left-radius: 10px !important;
        }
      `}</style>
    </div>
  );
}
