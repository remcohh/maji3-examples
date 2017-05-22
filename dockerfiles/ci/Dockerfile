FROM node:6

RUN apt-get update \
  && apt-get -y install apt-utils \
          build-essential \
          git-core \
          curl libssl-dev \
          libreadline-dev \
          zlib1g zlib1g-dev \
          libcurl4-openssl-dev \
          libxslt-dev libxml2-dev \
  && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ARG JENKINS_UID=999
RUN (id ${JENKINS_UID} && userdel $(id -un ${JENKINS_UID}) || true) && adduser --disabled-password --gecos "" --uid ${JENKINS_UID} --gid 1 jenkins

USER jenkins
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
ENV PATH /home/jenkins/.yarn/bin:${PATH}

ADD package.json /tmp
ADD yarn.lock /tmp

# silly workaround because ADD doesn't honor USER
USER root
RUN cd /tmp && chown jenkins package.json yarn.lock
USER jenkins

RUN cd /tmp && yarn install
