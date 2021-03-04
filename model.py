import pickle
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity



df = pickle.load(open("./prepeared_df.pkl" , "rb"))
count_model = pickle.load(open("./count_model.pkl" , "rb"))

count_matrix = count_model.fit_transform(df['soup'])
df = df.reset_index()

indices = pd.Series(df.index , index = df['title'])
all_titles = [df['title'][i] for i in range(len(df['title']))]


def get_recommendations(title):
    cosine_sim = cosine_similarity(count_matrix , count_matrix)
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores , key = lambda a: a[1] , reverse = True)
    sim_scores = sim_scores[1:11]
    movie_indices = [i[0] for i in sim_scores]
    tit = df['title'].iloc[movie_indices]
    dat = df['release_date'].iloc[movie_indices]
    return_df = pd.DataFrame(columns = ['Title' , 'Year'])
    return_df['Title'] = tit
    return_df['Year'] = dat
    
    return return_df
