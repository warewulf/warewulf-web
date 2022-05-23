import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { NewspaperIcon, DownloadIcon, SupportIcon, ArrowsExpandIcon, LockClosedIcon, BadgeCheckIcon, CubeTransparentIcon, CheckCircleIcon, ChartSquareBarIcon } from '@heroicons/react/outline'

import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "../images/logo.png"

const features = [
  {
    name: 'Feature 1 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 2 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 3 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 4 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 5 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 6 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 7 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 8 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 9 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
]


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mb-10">
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
              <img src={logo} className="w-48 mb-5 inline-flex justify-center" /><br />
              Warewulf
            </h2>
            <p className="text-base mb-10 text-gray-700 md:text-lg">
              A stateless and diskless container operating system provisioning system for large clusters of bare metal and/or virtual systems.
            </p>
          </div>

          <div className="flex items-center sm:justify-center">

            <Link to="/getting-started">
              <button
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-900 hover:bg-green-800 focus:shadow-outline focus:outline-none">
                Get Started
              </button>
            </Link>
            <Link
              to="/help"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-green-900">
              Need help?
            </Link>
          </div>
        </div>
      </div>


      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 py-20">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-10">
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h3 className="max-w-xl font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
              Overview
            </h3>
          </div>
        </div>

        <div className="grid mt-10 mb-10 grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          <div className="flex mt-5 mb-5 flex-col bg-white rounded-2xl shadow-xl border border-gray-200">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="absolute top-0 p-5 inline-block bg-green-900 rounded-xl shadow-lg transform -translate-y-1/2">
                <CubeTransparentIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                Lightweight
              </h3>
              <p className="mt-4 text-base text-gray-700">
                Warewulf needs to do its job and stay out of the way. There should be no underlying system dependencies, changes or “stack” for the controller or worker nodes.
              </p>
            </div>
          </div>
          <div className="flex mt-5 mb-5 flex-col bg-white rounded-2xl shadow-xl border border-gray-200">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="absolute top-0 p-5 inline-block bg-green-900 rounded-xl shadow-lg transform -translate-y-1/2">
                <CheckCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                Simple
              </h3>
              <p className="mt-4 text-base text-gray-700">
                Warewulf is used by hobbyists, researchers, scientists, engineers and systems administrators. This means that Warewulf must be simple to use and understand.
              </p>
            </div>
          </div>
          <div className="flex mt-5 mb-5 flex-col bg-white rounded-2xl shadow-xl border border-gray-200">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="absolute top-0 p-5 inline-block bg-green-900 rounded-xl shadow-lg transform -translate-y-1/2">
                <ChartSquareBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                Flexible
              </h3>
              <p className="mt-4 text-base text-gray-700">
                Warewulf is highly flexible and can address the needs of any environment – from graphical workstations to massive supercomputing centers.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>


  </Layout>
)

export default IndexPage
