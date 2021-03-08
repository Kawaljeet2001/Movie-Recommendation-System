# Movie-Recommendation-System
This is the Movie Recommendation System, to get personlized movie recommendations for a movie search.

<!-- # Realtime Twitter Sentiment Analysis Dashboard
Twitter Analytics Dashboard -->

### Description 

The project **Movie Recommendation System**, uses a **Content-Based** Machine learning recommendation approach to determine movie recommendations based on user search.

### Characteristic functionalities

* Realtime search of movie information from IMDB's official data.
* Content-Based recommendeer system for getting recommendations for the searches.
* Full-responsive design of the application.
<!-- * Options to choose custom input attributes like range of dates, maximum number of tweets to be fetched, etc.
* Dashboard presenting a complete twitter-performance-chart for the respective Username or keyword.
* Analysis of user engagement on the Twitter, based on different languages used, number of retweets and distribution of tweets over weekdays. -->

### Tech Stack 

* [React.js](https://github.com/facebook/react "React.js + Hooks") is used for Frontend.
<!-- * **Training the Sentiment Model**: -->
* [Flask](https://github.com/pallets/flask "Flask") is used in the backend. The API endpoint for getting the recommmendations is setup with cross-site-origin access.
* [Scikit Learn Count-Vectorizer](https://github.com/scikit-learn/scikit-learn "Scikit-Learn") Scikit-Learn's CountVectorizer is used for preperation of the Recomendeer system. The **Cosine similarity** parameter is used for finding the closest neigbhours. The top 10 movies with closest similarity score are selected.
* [Tmdb](https://github.com/gajus/tmdb "Tmbd -API") is used to fetch the attribute information and image data of movies and recommendations in realtime accoriding to official IMDB's records.
* [Heroku](https://github.com/heroku/heroku-buildpack-python "Heroku") The application is deployed live on Heroku, using gunicorn static-file web server.
<!-- * [Gensim](https://github.com/RaRe-Technologies/gensim "Gensim") provides fast utilites for training NLP models and vector embeddings. 
    * Word2Vec model from gensim was used for vector embeddings.
* [Pickle](https://github.com/python/cpython/blob/master/Lib/pickle.py "Pickle") was used for serializing trained models and using them for prediction and production. The trained models were pickled and dumped in the directory for further use. -->
<!-- 
* **Dashboard for Twitter Analysis**:
    * [Flask](https://github.com/pallets/flask "Flask") is used as backend for Dashboard.
    * [Dash](https://github.com/plotly/dash "Dash"), an HTML, CSS wrapper is used for laying out the UI for the Dashboard. Dash was predominantly used for setting up the Frontend of the Dashboard.
    * [Plotly](https://github.com/plotly "Plotly") is used for all charts, plots and graphical visualizations on the dashboard.

* **Determining the accuracy of the Sentiment Analysis Model**:
    For determining the accuracy, a dataset was choosen and its polarity was determined using pretrained Supervised ML model Vader Sentiment Analyser and then the F1 score was calculated using both the labelled data and the predicted data.
    * The accuracy of the model stands at: ```0.752 or 75.2%``` -->
### Prototype

<!-- **Using a Twitter-Username for Analysing data** -->
<!-- 
![dash](https://user-images.githubusercontent.com/56076028/106376026-4869f280-63b7-11eb-87fb-e1e3a6a4b817.jpeg)

![username](https://user-images.githubusercontent.com/56076028/106364418-dc56a280-6354-11eb-8bba-ee15e7cf6e31.jpeg)

![username1](https://user-images.githubusercontent.com/56076028/106364442-04460600-6355-11eb-9ce7-36540006fda4.jpeg)

![username2](https://user-images.githubusercontent.com/56076028/106364448-1758d600-6355-11eb-83d2-835529be9c72.jpeg) -->

<!-- 
**Using a Keyword for Analysing data**

![keyword](https://user-images.githubusercontent.com/56076028/106364458-29d30f80-6355-11eb-8d67-1ab1cc0faaf1.jpeg)

![keyword1](https://user-images.githubusercontent.com/56076028/106364473-3ce5df80-6355-11eb-8815-93a342eab3aa.jpeg)


### Thought behind the Project

The project has several use cases in the industry ranging from, Analysing the sentiment of Users on Twitter for a particular product or service, to managing and proctoring the twitter engagement for tweets related a particular topic. The dashboard can act as a perfect tool for analysing market performance and further deciding the future of the service or product offered. -->

### Setup Process

For setting up the project on a local machine:

* Fork this repository.
* Clone the repository using simple zip download or use the command
    ```
        git clone https://github.com/Kawaljeet2001/Movie-Recommendation-System
    ```
* Move to the master branch by using command
    ```
        git checkout  master
    ```
* Create a virtual environment for the project
    ```
        pip install virtualenv
        for windows: virtualenv -p /usr/bin/python3 env_name
        for linux(ubuntu): virtualenv env_name
        
    ```
* Activate the Virtual environment
    ```
       source env_name/bin/activate
    ```
    Once the virtual environment is activated, the name of your virtual environment will appear on left side of terminal. This will let you know that the virtual environment is currently active. 

* Install all the dependencies
    ```
       pip install -r requirements.txt
    ```

* To start the app on the developement server, run the command
    ```
        python app.py
    ```

<!-- 
**Above Steps are sufficient for running the dashboard and analyzing realtime twitter data sentiment performance. But, for running the preprocessing and training model files, nltk data has to be downloaded to access the utilities. For that use the command:** -->
<!-- 
    ```
        nltk.download()
    ``` -->

