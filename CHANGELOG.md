# Changelog

All notable changes to ZeroToML are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] — 2025-04-18

### Added — All 9 Modules Complete 🎉

**Module 01 — Environment & Data Foundations**
- 1.1 The ML Ecosystem: Python, Conda, JupyterLab, project structure
- 1.2 NumPy Mastery: N-dimensional arrays, broadcasting, vectorisation
- 1.3 Pandas for Data Science: DataFrames, GroupBy, pivot tables, I/O
- 1.4 Exploratory Data Analysis: Matplotlib/Seaborn, outlier detection, correlation heatmaps

**Module 02 — Mathematical Pillars**
- 2.1 Linear Algebra: matrix multiplication, inverse, norms, eigenvalues
- 2.2 Calculus & Gradient Descent: partial derivatives, chain rule, SGD, Adam
- 2.3 Probability & Statistics: Bayes' theorem, distributions, hypothesis testing

**Module 03 — Feature Engineering**
- 3.1 Data Cleaning: MCAR/MAR/MNAR, KNN imputation, type fixes, outliers
- 3.2 Preprocessing & Scaling: StandardScaler, MinMax, Robust, Pipelines
- 3.3 Categorical Encoding: one-hot, ordinal, target encoding with K-fold
- 3.4 Feature Selection & PCA: filter/wrapper/embedded methods, scree plot

**Module 04 — Supervised Learning**
- 4.1 Regression: simple, multiple, polynomial, Ridge, Lasso, residual analysis
- 4.2 Classification: logistic regression, KNN, decision boundary visualisation
- 4.3 Support Vector Machines: hard/soft margin, kernel trick (RBF, polynomial)
- 4.4 Tree-based Models: Gini, entropy, CART algorithm, pruning, importances
- 4.5 Ensemble Methods: Random Forest, XGBoost, LightGBM, CatBoost, early stopping

**Module 05 — Unsupervised Learning**
- 5.1 Clustering: K-Means (elbow + silhouette), hierarchical, DBSCAN
- 5.2 Dimensionality Reduction: PCA, t-SNE, LDA with side-by-side comparison
- 5.3 Association Rule Learning: Apriori, ECLAT, support/confidence/lift

**Module 06 — Model Evaluation & Optimization**
- 6.1 Bias vs. Variance: learning curves, validation curves, K-fold CV
- 6.2 Classification Metrics: confusion matrix, precision/recall/F1, ROC-AUC, PR-AUC
- 6.3 Regression Metrics: MAE, MSE, RMSE, R², MAPE, residual plots
- 6.4 Hyperparameter Tuning: GridSearchCV, RandomizedSearchCV, Bayesian (Optuna)

**Module 07 — Deep Learning**
- 7.1 Perceptron Foundations: perceptron from scratch, all activation functions with derivatives
- 7.2 Network Architecture: MLP with Keras, BatchNorm, Dropout, EarlyStopping
- 7.3 Backprop & Optimization: manual backprop, 5 optimisers benchmarked, LR scheduling
- 7.4 Advanced DL: CNNs on MNIST, LSTMs/GRUs for time-series, transfer learning

**Module 08 — Reinforcement Learning**
- 8.1 The RL Framework: agent/env/state/action/reward, Bellman equation, ε-greedy
- 8.2 Q-Learning & DQN: tabular Q-Learning on FrozenLake, full DQN from scratch on CartPole

**Module 09 — MLOps & Deployment**
- 9.1 Model Persistence: Pickle, Joblib, Keras SavedModel, versioning with metadata
- 9.2 Building REST APIs: FastAPI + Pydantic, batch endpoints, health check, Pytest
- 9.3 Containerization: Dockerfile best practices, Docker Compose, pushing to ECR
- 9.4 Cloud Deployment: Streamlit Community Cloud, Render, AWS (EC2/ECS/Lambda), GitHub Actions CI/CD

### Added — Companion Tools
- PyOrbit IDE: serverless Python data science IDE (Pyodide + Monaco Editor)
- Hyperplane Hero: interactive SVM learning game (5 levels, 3 kernels)
- Rich Text → Markdown Converter: privacy-first browser-native conversion

### Added — Site Infrastructure
- `about.html`: comprehensive about page with full curriculum overview, tool descriptions, tech stack, and contribution guide
- Updated `index.html`: 9-module curriculum grid, tools section, learning loop, expanded footer
- `CONTRIBUTING.md`: full contributor guide with HTML component reference
- `CODE_OF_CONDUCT.md`: community standards
- `CHANGELOG.md`: this file
- `.github/ISSUE_TEMPLATE/`: bug report and content improvement templates
- `.github/PULL_REQUEST_TEMPLATE.md`: structured PR template

### Changed
- Theme: removed dark/light toggle entirely — permanent "Earthy Sky Coder" theme
- Sidebar: removed "soon" labels and opacity dimming — all lessons render uniformly
- Logo: updated from Σ to ML monogram
- Navbar: added About and Tools links
